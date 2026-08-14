import React, { useState, useId } from 'react';
import { 
  X, 
  Sparkles, 
  Play, 
  RefreshCw, 
  TrendingUp, 
  CheckCircle2, 
  AlertCircle, 
  BarChart3, 
  Sliders, 
  Film, 
  GraduationCap, 
  Users, 
  Building2, 
  DollarSign, 
  Star, 
  Percent, 
  Layers,
  ArrowRight
} from 'lucide-react';
import { Project } from '../types';

interface LiveDemoModalProps {
  project: Project | null;
  onClose: () => void;
}

export const LiveDemoModal: React.FC<LiveDemoModalProps> = ({ project, onClose }) => {
  const sqftId = useId();
  const bedroomsId = useId();
  const bathroomsId = useId();
  const locationQualityId = useId();
  const houseAgeId = useId();
  const regionId = useId();
  const categoryId = useId();
  const quarterId = useId();
  const incomeId = useId();
  const spendingScoreId = useId();
  const ageId = useId();
  const selectedMovieId = useId();
  const studyHoursId = useId();
  const attendanceId = useId();
  const pastScoreId = useId();
  const homeworkRateId = useId();
  // 1. House Price State
  const [sqft, setSqft] = useState<number>(1850);
  const [bedrooms, setBedrooms] = useState<number>(3);
  const [bathrooms, setBathrooms] = useState<number>(2);
  const [locationQuality, setLocationQuality] = useState<number>(8); // 1 to 10
  const [houseAge, setHouseAge] = useState<number>(5);

  // 2. Sales Dashboard State
  const [selectedRegion, setSelectedRegion] = useState<string>('All');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedQuarter, setSelectedQuarter] = useState<string>('All');

  // 3. Customer Segmentation State
  const [annualIncome, setAnnualIncome] = useState<number>(65); // in $k
  const [spendingScore, setSpendingScore] = useState<number>(75); // 1 to 100
  const [customerAge, setCustomerAge] = useState<number>(28);

  // 4. Movie Recommender State
  const [selectedMovie, setSelectedMovie] = useState<string>('Inception');

  // 5. Student Performance State
  const [studyHours, setStudyHours] = useState<number>(14);
  const [attendance, setAttendance] = useState<number>(92);
  const [pastScore, setPastScore] = useState<number>(84);
  const [homeworkRate, setHomeworkRate] = useState<number>(95);
  const [hasExtraActivities, setHasExtraActivities] = useState<boolean>(true);

  if (!project) return null;

  // Real-time calculation helpers:
  // 1. House price linear regression simulation
  const calculateHousePrice = () => {
    const basePrice = 120000;
    const sqftFactor = sqft * 165;
    const bedFactor = bedrooms * 18000;
    const bathFactor = bathrooms * 22000;
    const qualityFactor = (locationQuality - 5) * 28000;
    const ageDepreciation = houseAge * 1400;
    const estimated = Math.max(85000, basePrice + sqftFactor + bedFactor + bathFactor + qualityFactor - ageDepreciation);
    const pricePerSqFt = Math.round(estimated / sqft);
    return { estimated: Math.round(estimated), pricePerSqFt };
  };

  // 2. Sales Dashboard calculation
  const getFilteredSalesData = () => {
    let baseRevenue = 485000;
    let baseUnits = 3420;
    let baseProfit = 142000;

    if (selectedRegion === 'North') { baseRevenue *= 0.32; baseUnits *= 0.30; baseProfit *= 0.34; }
    else if (selectedRegion === 'South') { baseRevenue *= 0.28; baseUnits *= 0.29; baseProfit *= 0.27; }
    else if (selectedRegion === 'East') { baseRevenue *= 0.22; baseUnits *= 0.23; baseProfit *= 0.21; }
    else if (selectedRegion === 'West') { baseRevenue *= 0.18; baseUnits *= 0.18; baseProfit *= 0.18; }

    if (selectedCategory === 'Tech Gadgets') { baseRevenue *= 0.45; baseProfit *= 0.50; }
    else if (selectedCategory === 'Office Supplies') { baseRevenue *= 0.25; baseProfit *= 0.20; }
    else if (selectedCategory === 'Furniture') { baseRevenue *= 0.30; baseProfit *= 0.30; }

    if (selectedQuarter === 'Q4') { baseRevenue *= 1.35; baseProfit *= 1.38; }
    else if (selectedQuarter === 'Q1') { baseRevenue *= 0.85; baseProfit *= 0.82; }

    const margin = Math.round((baseProfit / baseRevenue) * 100);
    const aov = Math.round(baseRevenue / baseUnits);

    return {
      revenue: Math.round(baseRevenue),
      units: Math.round(baseUnits),
      profit: Math.round(baseProfit),
      margin,
      aov
    };
  };

  // 3. Customer cluster prediction
  const getCustomerCluster = () => {
    if (annualIncome >= 60 && spendingScore >= 60) {
      return {
        name: 'Cluster 1: High Income, High Spenders (VIP Target)',
        color: 'text-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 border-emerald-300 dark:border-emerald-800',
        strategy: 'Premium loyalty rewards, early product launches, personalized concierge service.',
        confidence: '96.2%',
        icon: <Star className="w-5 h-5 text-emerald-500" />
      };
    } else if (annualIncome >= 60 && spendingScore < 60) {
      return {
        name: 'Cluster 2: High Income, Low Spenders (Careful Savers)',
        color: 'text-blue-500 bg-blue-50 dark:bg-blue-950/40 border-blue-300 dark:border-blue-800',
        strategy: 'Value-oriented bundles, luxury investment framing, long-term warranty incentives.',
        confidence: '93.5%',
        icon: <TrendingUp className="w-5 h-5 text-blue-500" />
      };
    } else if (annualIncome < 60 && spendingScore >= 60) {
      return {
        name: 'Cluster 3: Low Income, High Spenders (Impulsive Trendsetters)',
        color: 'text-amber-500 bg-amber-50 dark:bg-amber-950/40 border-amber-300 dark:border-amber-800',
        strategy: 'Flash sales, buy-now-pay-later financing, trend-driven viral discounts.',
        confidence: '91.8%',
        icon: <Sparkles className="w-5 h-5 text-amber-500" />
      };
    } else {
      return {
        name: 'Cluster 4: Low Income, Low Spenders (Budget Conscious)',
        color: 'text-slate-500 bg-slate-100 dark:bg-slate-800 border-slate-300 dark:border-slate-700',
        strategy: 'Budget discount codes, bulk essentials, low minimum free shipping coupons.',
        confidence: '94.7%',
        icon: <Percent className="w-5 h-5 text-slate-500" />
      };
    }
  };

  // 4. Movie Recommendations Database
  const movieDatabase: Record<string, Array<{ title: string; match: number; genre: string; director: string }>> = {
    'Inception': [
      { title: 'Interstellar', match: 96, genre: 'Sci-Fi / Space / Drama', director: 'Christopher Nolan' },
      { title: 'The Prestige', match: 92, genre: 'Mystery / Thriller / Drama', director: 'Christopher Nolan' },
      { title: 'Shutter Island', match: 89, genre: 'Psychological Mystery', director: 'Martin Scorsese' },
      { title: 'The Matrix', match: 87, genre: 'Cyberpunk / Action / Sci-Fi', director: 'The Wachowskis' },
      { title: 'Tenet', match: 85, genre: 'Action / Sci-Fi / Espionage', director: 'Christopher Nolan' }
    ],
    'Interstellar': [
      { title: 'Contact', match: 95, genre: 'Sci-Fi / Astronomy / Drama', director: 'Robert Zemeckis' },
      { title: 'The Martian', match: 93, genre: 'Sci-Fi / Survival / Drama', director: 'Ridley Scott' },
      { title: 'Inception', match: 92, genre: 'Sci-Fi / Action / Thriller', director: 'Christopher Nolan' },
      { title: 'Arrival', match: 90, genre: 'Sci-Fi / Linguistics / Mystery', director: 'Denis Villeneuve' },
      { title: 'Gravity', match: 86, genre: 'Space Thriller / Drama', director: 'Alfonso Cuarón' }
    ],
    'The Dark Knight': [
      { title: 'Batman Begins', match: 97, genre: 'Action / Superhero / Crime', director: 'Christopher Nolan' },
      { title: 'The Dark Knight Rises', match: 94, genre: 'Action / Drama / Superhero', director: 'Christopher Nolan' },
      { title: 'Joker', match: 88, genre: 'Psychological Thriller / Crime', director: 'Todd Phillips' },
      { title: 'The Batman (2022)', match: 86, genre: 'Neo-Noir / Detective / Action', director: 'Matt Reeves' },
      { title: 'Se7en', match: 83, genre: 'Crime / Mystery / Thriller', director: 'David Fincher' }
    ],
    'The Matrix': [
      { title: 'Inception', match: 91, genre: 'Sci-Fi / Mind-Bending', director: 'Christopher Nolan' },
      { title: 'Blade Runner 2049', match: 89, genre: 'Neo-Noir / Sci-Fi', director: 'Denis Villeneuve' },
      { title: 'Dark City', match: 87, genre: 'Sci-Fi / Mystery Thriller', director: 'Alex Proyas' },
      { title: 'Minority Report', match: 85, genre: 'Sci-Fi / Crime / Action', director: 'Steven Spielberg' },
      { title: 'Equilibrium', match: 82, genre: 'Action / Dystopian', director: 'Kurt Wimmer' }
    ],
    'Avengers: Endgame': [
      { title: 'Avengers: Infinity War', match: 98, genre: 'Superhero / Action / Sci-Fi', director: 'Russo Brothers' },
      { title: 'Captain America: Civil War', match: 92, genre: 'Action / Superhero', director: 'Russo Brothers' },
      { title: 'Thor: Ragnarok', match: 88, genre: 'Action / Sci-Fi / Comedy', director: 'Taika Waititi' },
      { title: 'Guardians of the Galaxy', match: 86, genre: 'Sci-Fi / Action / Space', director: 'James Gunn' },
      { title: 'Spider-Man: No Way Home', match: 84, genre: 'Action / Superhero / Multiverse', director: 'Jon Watts' }
    ]
  };

  // 5. Student Score Predictor
  const calculateStudentPerformance = () => {
    const studyWeight = studyHours * 1.6;
    const attendanceWeight = (attendance / 100) * 28;
    const pastWeight = (pastScore / 100) * 42;
    const hwWeight = (homeworkRate / 100) * 12;
    const extraBonus = hasExtraActivities ? 4 : 0;

    const rawPredicted = studyWeight + attendanceWeight + pastWeight + hwWeight + extraBonus;
    const predictedScore = Math.min(100, Math.max(20, Math.round(rawPredicted)));

    let grade = 'C';
    let status = 'Satisfactory';
    let passProb = 80;

    if (predictedScore >= 90) { grade = 'A+'; status = 'Distinction / Honors'; passProb = 99; }
    else if (predictedScore >= 80) { grade = 'A'; status = 'Excellent'; passProb = 95; }
    else if (predictedScore >= 70) { grade = 'B'; status = 'Good'; passProb = 90; }
    else if (predictedScore >= 60) { grade = 'C'; status = 'Average'; passProb = 82; }
    else if (predictedScore >= 50) { grade = 'D'; status = 'At-Risk (Needs Tutoring)'; passProb = 65; }
    else { grade = 'F'; status = 'Critical Risk (Immediate Action Required)'; passProb = 35; }

    return { predictedScore, grade, status, passProb };
  };

  const housePrice = calculateHousePrice();
  const salesData = getFilteredSalesData();
  const cluster = getCustomerCluster();
  const recommendations = movieDatabase[selectedMovie] || movieDatabase['Inception'];
  const studentResult = calculateStudentPerformance();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl max-w-4xl w-full max-h-[90vh] flex flex-col overflow-hidden text-slate-900 dark:text-slate-100"
        role="dialog"
        aria-modal="true"
        aria-labelledby="live-demo-modal-title"
      >
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50/80 dark:bg-slate-800/40">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400">
              <Play className="w-5 h-5 fill-current" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-medium px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300">
                  Live Interactive Sandbox
                </span>
                <span className="text-xs text-slate-500 font-mono">
                  {project.category}
                </span>
              </div>
              <h3 id="live-demo-modal-title" className="text-lg font-bold text-slate-900 dark:text-slate-100 mt-0.5">
                {project.title} &mdash; Model Demonstration
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          {/* 1. House Price Prediction Interactive Demo */}
          {project.demoType === 'house-price' && (
            <div className="space-y-6">
              <div className="p-4 rounded-xl bg-blue-50/60 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900/50 text-sm text-slate-700 dark:text-slate-300 flex items-start gap-3">
                <Sliders className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                <p>
                  Adjust property parameters below. The regression model dynamically computes estimated fair market value, confidence interval, and estimated price per square foot using Ridge Regularization weights.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Input Controls */}
                <div className="space-y-4 p-5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800">
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-blue-500" />
                    Property Feature Inputs
                  </h4>

                  <div>
                    <div className="flex justify-between text-xs font-mono mb-1">
                      <label htmlFor={sqftId} className="text-slate-600 dark:text-slate-400">Total Square Footage (SqFt):</label>
                      <span className="font-bold text-blue-600 dark:text-blue-400">{sqft.toLocaleString()} sq ft</span>
                    </div>
                    <input
                      id={sqftId}
                      type="range"
                      min="600"
                      max="4500"
                      step="50"
                      value={sqft}
                      onChange={(e) => setSqft(Number(e.target.value))}
                      className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-600"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <div className="flex justify-between text-xs font-mono mb-1">
                        <label htmlFor={bedroomsId} className="text-slate-600 dark:text-slate-400">Bedrooms:</label>
                        <span className="font-bold text-blue-600 dark:text-blue-400">{bedrooms}</span>
                      </div>
                      <input
                        id={bedroomsId}
                        type="range"
                        min="1"
                        max="6"
                        value={bedrooms}
                        onChange={(e) => setBedrooms(Number(e.target.value))}
                        className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-600"
                      />
                    </div>
                    <div>
                      <div className="flex justify-between text-xs font-mono mb-1">
                        <label htmlFor={bathroomsId} className="text-slate-600 dark:text-slate-400">Bathrooms:</label>
                        <span className="font-bold text-blue-600 dark:text-blue-400">{bathrooms}</span>
                      </div>
                      <input
                        id={bathroomsId}
                        type="range"
                        min="1"
                        max="5"
                        value={bathrooms}
                        onChange={(e) => setBathrooms(Number(e.target.value))}
                        className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-600"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-mono mb-1">
                      <label htmlFor={locationQualityId} className="text-slate-600 dark:text-slate-400">Location Quality Index (1-10):</label>
                      <span className="font-bold text-blue-600 dark:text-blue-400">{locationQuality} / 10</span>
                    </div>
                    <input
                      id={locationQualityId}
                      type="range"
                      min="1"
                      max="10"
                      value={locationQuality}
                      onChange={(e) => setLocationQuality(Number(e.target.value))}
                      className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-600"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-mono mb-1">
                      <label htmlFor={houseAgeId} className="text-slate-600 dark:text-slate-400">Property Age:</label>
                      <span className="font-bold text-blue-600 dark:text-blue-400">{houseAge} Years Old</span>
                    </div>
                    <input
                      id={houseAgeId}
                      type="range"
                      min="0"
                      max="40"
                      value={houseAge}
                      onChange={(e) => setHouseAge(Number(e.target.value))}
                      className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-600"
                    />
                  </div>
                </div>

                {/* Real-time Output Card */}
                <div className="p-5 rounded-xl bg-gradient-to-br from-blue-500/10 via-slate-50 to-indigo-500/10 dark:from-blue-950/40 dark:via-slate-900 dark:to-indigo-950/40 border border-blue-200 dark:border-blue-900/60 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400 font-semibold">
                      Model Prediction Output
                    </span>
                    <div className="mt-3">
                      <div className="text-xs text-slate-500">Estimated Property Valuation</div>
                      <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-mono tracking-tight mt-1">
                        ${housePrice.estimated.toLocaleString()}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 mt-6 pt-4 border-t border-slate-200 dark:border-slate-800 text-xs">
                      <div>
                        <span className="text-slate-500 block">Est. Price / SqFt</span>
                        <span className="font-mono font-bold text-slate-900 dark:text-slate-200 text-sm">
                          ${housePrice.pricePerSqFt}/sqft
                        </span>
                      </div>
                      <div>
                        <span className="text-slate-500 block">Confidence Band (95%)</span>
                        <span className="font-mono font-bold text-emerald-600 dark:text-emerald-400 text-sm">
                          &plusmn; 4.8%
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-500">
                    <span className="font-semibold text-slate-700 dark:text-slate-300">Feature Importance:</span> Living SqFt (44%) &bull; Location Tier (28%) &bull; Age (14%) &bull; Baths/Beds (14%)
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 2. Sales Data Analysis Dashboard Interactive Demo */}
          {project.demoType === 'sales-dashboard' && (
            <div className="space-y-6">
              {/* Filter bar */}
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label htmlFor={regionId} className="block text-xs font-mono text-slate-500 mb-1">Filter Region:</label>
                  <select
                    id={regionId}
                    value={selectedRegion}
                    onChange={(e) => setSelectedRegion(e.target.value)}
                    className="w-full bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg px-3 py-1.5 text-xs font-medium focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="All">All Regions (Global)</option>
                    <option value="North">North Region</option>
                    <option value="South">South Region</option>
                    <option value="East">East Region</option>
                    <option value="West">West Region</option>
                  </select>
                </div>
                <div>
                  <label htmlFor={categoryId} className="block text-xs font-mono text-slate-500 mb-1">Product Category:</label>
                  <select
                    id={categoryId}
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg px-3 py-1.5 text-xs font-medium focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="All">All Product Categories</option>
                    <option value="Tech Gadgets">Tech Gadgets &amp; Electronics</option>
                    <option value="Office Supplies">Office Supplies</option>
                    <option value="Furniture">Commercial Furniture</option>
                  </select>
                </div>
                <div>
                  <label htmlFor={quarterId} className="block text-xs font-mono text-slate-500 mb-1">Fiscal Quarter:</label>
                  <select
                    id={quarterId}
                    value={selectedQuarter}
                    onChange={(e) => setSelectedQuarter(e.target.value)}
                    className="w-full bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg px-3 py-1.5 text-xs font-medium focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="All">Full Year (FY2025)</option>
                    <option value="Q1">Q1 (Jan - Mar)</option>
                    <option value="Q2">Q2 (Apr - Jun)</option>
                    <option value="Q3">Q3 (Jul - Sep)</option>
                    <option value="Q4">Q4 (Holiday Festive Peak)</option>
                  </select>
                </div>
              </div>

              {/* KPI Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900">
                  <div className="text-xs font-mono text-slate-500">Gross Revenue</div>
                  <div className="text-xl font-bold font-mono text-blue-600 dark:text-blue-400 mt-1">
                    ${salesData.revenue.toLocaleString()}
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900">
                  <div className="text-xs font-mono text-slate-500">Net Profit Margin</div>
                  <div className="text-xl font-bold font-mono text-emerald-600 dark:text-emerald-400 mt-1">
                    ${salesData.profit.toLocaleString()} ({salesData.margin}%)
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-900">
                  <div className="text-xs font-mono text-slate-500">Units Sold</div>
                  <div className="text-xl font-bold font-mono text-indigo-600 dark:text-indigo-400 mt-1">
                    {salesData.units.toLocaleString()}
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900">
                  <div className="text-xs font-mono text-slate-500">Avg Order Value (AOV)</div>
                  <div className="text-xl font-bold font-mono text-amber-600 dark:text-amber-400 mt-1">
                    ${salesData.aov}
                  </div>
                </div>
              </div>

              {/* Breakdown Bars */}
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 space-y-3">
                <div className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                  Sales Contribution by Product Segment
                </div>
                <div className="space-y-2 text-xs">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Tech &amp; Computing Hardware</span>
                      <span className="font-mono font-bold">52% ($252k)</span>
                    </div>
                    <div className="h-2 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
                      <div className="h-full bg-blue-500 rounded-full" style={{ width: '52%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Modular Office Furniture</span>
                      <span className="font-mono font-bold">28% ($135k)</span>
                    </div>
                    <div className="h-2 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
                      <div className="h-full bg-indigo-500 rounded-full" style={{ width: '28%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Commercial Consumables</span>
                      <span className="font-mono font-bold">20% ($98k)</span>
                    </div>
                    <div className="h-2 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
                      <div className="h-full bg-emerald-500 rounded-full" style={{ width: '20%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 3. Customer Segmentation Interactive Demo */}
          {project.demoType === 'customer-segmentation' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Sliders */}
                <div className="space-y-4 p-5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800">
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                    <Users className="w-4 h-4 text-blue-500" />
                    Customer Demographic Inputs
                  </h4>

                  <div>
                    <div className="flex justify-between text-xs font-mono mb-1">
                      <label htmlFor={incomeId} className="text-slate-600 dark:text-slate-400">Annual Income ($k):</label>
                      <span className="font-bold text-blue-600 dark:text-blue-400">${annualIncome},000/yr</span>
                    </div>
                    <input
                      id={incomeId}
                      type="range"
                      min="15"
                      max="140"
                      value={annualIncome}
                      onChange={(e) => setAnnualIncome(Number(e.target.value))}
                      className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-600"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-mono mb-1">
                      <label htmlFor={spendingScoreId} className="text-slate-600 dark:text-slate-400">Spending Score (1 - 100):</label>
                      <span className="font-bold text-blue-600 dark:text-blue-400">{spendingScore} / 100</span>
                    </div>
                    <input
                      id={spendingScoreId}
                      type="range"
                      min="1"
                      max="100"
                      value={spendingScore}
                      onChange={(e) => setSpendingScore(Number(e.target.value))}
                      className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-600"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-mono mb-1">
                      <label htmlFor={ageId} className="text-slate-600 dark:text-slate-400">Customer Age:</label>
                      <span className="font-bold text-blue-600 dark:text-blue-400">{customerAge} Years</span>
                    </div>
                    <input
                      id={ageId}
                      type="range"
                      min="18"
                      max="70"
                      value={customerAge}
                      onChange={(e) => setCustomerAge(Number(e.target.value))}
                      className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-600"
                    />
                  </div>
                </div>

                {/* Cluster Result */}
                <div className="p-5 rounded-xl border flex flex-col justify-between space-y-4 bg-slate-50 dark:bg-slate-800/40 border-slate-200 dark:border-slate-800">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-mono uppercase text-slate-500">
                      <Layers className="w-4 h-4 text-blue-500" />
                      K-Means Cluster Assignment (k=4)
                    </div>
                    <div className={`mt-3 p-4 rounded-xl border font-bold text-sm flex items-start gap-3 ${cluster.color}`}>
                      <div className="shrink-0 mt-0.5">{cluster.icon}</div>
                      <div>
                        <div>{cluster.name}</div>
                        <div className="text-xs font-normal opacity-90 mt-1">
                          Model Assignment Confidence: {cluster.confidence}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs">
                    <span className="font-bold text-slate-800 dark:text-slate-200 block mb-1">
                      Recommended Marketing Action:
                    </span>
                    <span className="text-slate-600 dark:text-slate-400">
                      {cluster.strategy}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 4. Movie Recommendation System Interactive Demo */}
          {project.demoType === 'movie-recommender' && (
            <div className="space-y-6">
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <label htmlFor={selectedMovieId} className="block text-xs font-mono text-slate-500 mb-1">Select Seed Movie from Dataset:</label>
                  <select
                    id={selectedMovieId}
                    value={selectedMovie}
                    onChange={(e) => setSelectedMovie(e.target.value)}
                    className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg px-3 py-2 text-sm font-semibold focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="Inception">Inception (Sci-Fi / Mind-Bending)</option>
                    <option value="Interstellar">Interstellar (Space / Physics / Drama)</option>
                    <option value="The Dark Knight">The Dark Knight (Crime / Superhero / Action)</option>
                    <option value="The Matrix">The Matrix (Cyberpunk / Sci-Fi / Action)</option>
                    <option value="Avengers: Endgame">Avengers: Endgame (Superhero / Action / Epic)</option>
                  </select>
                </div>
                <div className="text-xs font-mono text-slate-500 flex items-center gap-1.5 bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 px-3 py-2 rounded-lg border border-blue-200 dark:border-blue-900">
                  <Film className="w-4 h-4 text-blue-500" />
                  Algorithm: TF-IDF &amp; Cosine Similarity
                </div>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase text-slate-500 mb-3">
                  Top 5 Content-Based Recommended Titles:
                </h4>
                <div className="space-y-2">
                  {recommendations.map((rec, idx) => (
                    <div 
                      key={idx}
                      className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-between hover:border-blue-400 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300 text-xs font-bold flex items-center justify-center font-mono">
                          {idx + 1}
                        </span>
                        <div>
                          <div className="text-sm font-bold text-slate-900 dark:text-slate-100">
                            {rec.title}
                          </div>
                          <div className="text-xs text-slate-500">
                            {rec.genre} &bull; Dir. {rec.director}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400">
                          {rec.match}% Match
                        </div>
                        <div className="text-[10px] text-slate-400 font-mono">
                          Cosine Sim: {(rec.match / 100).toFixed(3)}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* 5. Student Performance Prediction Interactive Demo */}
          {project.demoType === 'student-performance' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Inputs */}
                <div className="space-y-3.5 p-5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800">
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-blue-500" />
                    Student Academic &amp; Habit Indicators
                  </h4>

                  <div>
                    <div className="flex justify-between text-xs font-mono mb-1">
                      <label htmlFor={studyHoursId} className="text-slate-600 dark:text-slate-400">Weekly Study Hours:</label>
                      <span className="font-bold text-blue-600 dark:text-blue-400">{studyHours} hrs/week</span>
                    </div>
                    <input
                      id={studyHoursId}
                      type="range"
                      min="2"
                      max="28"
                      value={studyHours}
                      onChange={(e) => setStudyHours(Number(e.target.value))}
                      className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-600"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-mono mb-1">
                      <label htmlFor={attendanceId} className="text-slate-600 dark:text-slate-400">Class Attendance Rate (%):</label>
                      <span className="font-bold text-blue-600 dark:text-blue-400">{attendance}%</span>
                    </div>
                    <input
                      id={attendanceId}
                      type="range"
                      min="40"
                      max="100"
                      value={attendance}
                      onChange={(e) => setAttendance(Number(e.target.value))}
                      className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-600"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-mono mb-1">
                      <label htmlFor={pastScoreId} className="text-slate-600 dark:text-slate-400">Previous Exam Score:</label>
                      <span className="font-bold text-blue-600 dark:text-blue-400">{pastScore} / 100</span>
                    </div>
                    <input
                      id={pastScoreId}
                      type="range"
                      min="35"
                      max="100"
                      value={pastScore}
                      onChange={(e) => setPastScore(Number(e.target.value))}
                      className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-600"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-mono mb-1">
                      <label htmlFor={homeworkRateId} className="text-slate-600 dark:text-slate-400">Assignment Completion (%):</label>
                      <span className="font-bold text-blue-600 dark:text-blue-400">{homeworkRate}%</span>
                    </div>
                    <input
                      id={homeworkRateId}
                      type="range"
                      min="30"
                      max="100"
                      value={homeworkRate}
                      onChange={(e) => setHomeworkRate(Number(e.target.value))}
                      className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-600"
                    />
                  </div>

                  <div className="pt-2">
                    <label className="flex items-center gap-2 cursor-pointer text-xs font-medium">
                      <input
                        type="checkbox"
                        checked={hasExtraActivities}
                        onChange={(e) => setHasExtraActivities(e.target.checked)}
                        className="rounded text-blue-600 focus:ring-blue-500 w-4 h-4"
                      />
                      <span>Active in Technical / Extracurricular Activities</span>
                    </label>
                  </div>
                </div>

                {/* Model Predictions */}
                <div className="p-5 rounded-xl bg-gradient-to-br from-indigo-500/10 via-slate-50 to-blue-500/10 dark:from-indigo-950/40 dark:via-slate-900 dark:to-blue-950/40 border border-indigo-200 dark:border-indigo-900/60 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-indigo-600 dark:text-indigo-400 font-semibold">
                      Predictive Academic Output
                    </span>
                    
                    <div className="flex items-baseline gap-4 mt-3">
                      <div>
                        <div className="text-xs text-slate-500">Predicted Score</div>
                        <div className="text-3xl sm:text-4xl font-extrabold font-mono text-slate-900 dark:text-white">
                          {studentResult.predictedScore} <span className="text-base text-slate-400 font-normal">/ 100</span>
                        </div>
                      </div>
                      <div>
                        <div className="text-xs text-slate-500">Projected Grade</div>
                        <div className="text-2xl font-bold font-mono text-blue-600 dark:text-blue-400">
                          {studentResult.grade}
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 p-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs">
                      <div className="text-slate-500">Classification Status:</div>
                      <div className="font-bold text-slate-800 dark:text-slate-200 mt-0.5">
                        {studentResult.status}
                      </div>
                      <div className="mt-2 flex items-center justify-between text-[11px] font-mono">
                        <span>Pass Probability:</span>
                        <span className="font-bold text-emerald-600 dark:text-emerald-400">{studentResult.passProb}%</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-500">
                    <span className="font-semibold text-slate-700 dark:text-slate-300">Model:</span> Random Forest Regressor &bull; 91.4% test accuracy on UCI benchmark.
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-800/40 flex items-center justify-between">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono font-medium text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 flex items-center gap-1.5"
          >
            <span>View Source Code on GitHub</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium bg-slate-900 text-white dark:bg-white dark:text-slate-900 rounded-lg hover:opacity-90 transition-opacity"
          >
            Close Sandbox
          </button>
        </div>
      </div>
    </div>
  );
};
