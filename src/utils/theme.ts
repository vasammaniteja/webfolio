import { useState, useEffect } from 'react';

export function useTheme() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('datasci_theme');
      if (saved === 'dark' || saved === 'light') return saved;
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('datasci_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  return { theme, setTheme, toggleTheme, isDark: theme === 'dark' };
}

export function useBookmarks() {
  const [bookmarkedProjectIds, setBookmarkedProjectIds] = useState<string[]>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('datasci_bookmarked_projects');
        return saved ? JSON.parse(saved) : ['proj-edge-vlm', 'proj-biomolecule-diffusion'];
      } catch {
        return ['proj-edge-vlm'];
      }
    }
    return ['proj-edge-vlm'];
  });

  const [bookmarkedPaperIds, setBookmarkedPaperIds] = useState<string[]>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('datasci_bookmarked_papers');
        return saved ? JSON.parse(saved) : ['paper-vlm-distill', 'paper-diff-dock-3d'];
      } catch {
        return ['paper-vlm-distill'];
      }
    }
    return ['paper-vlm-distill'];
  });

  useEffect(() => {
    localStorage.setItem('datasci_bookmarked_projects', JSON.stringify(bookmarkedProjectIds));
  }, [bookmarkedProjectIds]);

  useEffect(() => {
    localStorage.setItem('datasci_bookmarked_papers', JSON.stringify(bookmarkedPaperIds));
  }, [bookmarkedPaperIds]);

  const toggleBookmarkProject = (id: string) => {
    setBookmarkedProjectIds(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const toggleBookmarkPaper = (id: string) => {
    setBookmarkedPaperIds(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const isProjectBookmarked = (id: string) => bookmarkedProjectIds.includes(id);
  const isPaperBookmarked = (id: string) => bookmarkedPaperIds.includes(id);

  const totalBookmarks = bookmarkedProjectIds.length + bookmarkedPaperIds.length;

  return {
    bookmarkedProjectIds,
    bookmarkedPaperIds,
    toggleBookmarkProject,
    toggleBookmarkPaper,
    isProjectBookmarked,
    isPaperBookmarked,
    totalBookmarks
  };
}

export function copyToClipboard(text: string): Promise<boolean> {
  if (navigator?.clipboard) {
    return navigator.clipboard.writeText(text).then(() => true).catch(() => false);
  }
  return Promise.resolve(false);
}
