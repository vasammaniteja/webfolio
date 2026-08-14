export type SkillCategory = 
  | 'Programming'
  | 'Data Analysis'
  | 'Data Visualization'
  | 'Machine Learning'
  | 'Databases'
  | 'Tools';

export interface SkillItem {
  name: string;
  category: SkillCategory;
  proficiency: number; // 0 to 100
  level: 'Proficient' | 'Advanced' | 'Intermediate' | 'Familiar';
  iconName: string;
  description: string;
  tags: string[];
}

export type DemoType = 
  | 'house-price'
  | 'sales-dashboard'
  | 'customer-segmentation'
  | 'movie-recommender'
  | 'student-performance';

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  problemStatement: string;
  keyResults: string[];
  githubUrl: string;
  liveDemoUrl?: string;
  demoType: DemoType;
  image: string;
  category: 'Machine Learning' | 'Data Analytics & BI' | 'Unsupervised Learning' | 'Recommender Systems' | 'Predictive Modeling';
  highlightedMetrics: Array<{ label: string; value: string; positive?: boolean }>;
  architecture?: string[];
  datasetUsed?: string;
}

export interface Certificate {
  id: string;
  name: string;
  issuer: string;
  date: string;
  credentialId: string;
  verificationUrl: string;
  image: string;
  skillsCovered: string[];
  description: string;
  badgeColor: string;
}

export interface EducationInfo {
  institution: string;
  degree: string;
  field: string;
  duration: string;
  location: string;
  status: string;
  coursework: string[];
  keyHighlights: string[];
}

export interface StudentProfile {
  name: string;
  title: string;
  shortBio: string;
  aboutParagraph: string;
  avatar: string;
  education: EducationInfo;
  careerGoal: string;
  interests: string[];
  strengths: {
    title: string;
    description: string;
    icon: string;
  }[];
  socials: {
    github: string;
    linkedin: string;
    email: string;
    kaggle?: string;
  };
  resume: {
    downloadUrl: string;
    viewUrl: string;
    lastUpdated: string;
    summary: string;
  };
}
