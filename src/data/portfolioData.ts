import { Certificate, Project, SkillItem, StudentProfile } from '../types';
import profileAvatar from '../assets/profile.jpg';

export const STUDENT_PROFILE: StudentProfile = {
  name: 'Vasam Maniteja',
  title: 'Data Science Student',
  shortBio: 'I am a passionate Data Science student interested in Python, data analysis, machine learning, and solving real-world problems using data.',
  aboutParagraph: 'As an aspiring Data Scientist and Machine Learning Engineer at Malla Reddy Engineering College & Management Sciences, I combine rigorous mathematical foundations with hands-on coding in Python, SQL, and Machine Learning algorithms. I specialize in turning complex raw datasets into predictive models and actionable business intelligence dashboards.',
  avatar: profileAvatar,
  education: {
    institution: 'Malla Reddy Engineering College & Management Sciences',
    degree: 'Bachelor of Technology (B.Tech)',
    field: 'Data Science / Computer Science & Engineering',
    duration: '2022 - 2026',
    location: 'Hyderabad, India',
    status: 'Final Year / Fresher',
    coursework: [
      'Data Structures & Algorithms',
      'Machine Learning & Deep Learning',
      'Probability & Applied Statistics',
      'Database Management Systems (DBMS)',
      'Data Mining & Warehousing',
      'Business Intelligence & Analytics',
      'Python for Data Science'
    ],
    keyHighlights: [
      'Strong academic focus on predictive analytics and statistical data modeling',
      'Completed 5+ comprehensive end-to-end Machine Learning and Analytics capstone projects',
      'Active participant in technical symposiums, coding challenges, and open-source data science workshops'
    ]
  },
  careerGoal: 'To become a Data Scientist / Machine Learning Engineer',
  interests: [
    'Data Analysis',
    'Machine Learning',
    'Artificial Intelligence',
    'Data Visualization',
    'Business Intelligence'
  ],
  strengths: [
    {
      title: 'Problem Solving',
      description: 'Systematic breakdown of complex business challenges into structured data pipelines and algorithmic steps.',
      icon: 'Brain'
    },
    {
      title: 'Analytical Thinking',
      description: 'Quantitative mindset for hypothesis testing, feature importance analysis, and data-driven insight discovery.',
      icon: 'TrendingUp'
    },
    {
      title: 'Programming',
      description: 'Clean, modular, and optimized code writing in Python, SQL, Java, and scientific data computing libraries.',
      icon: 'Code2'
    },
    {
      title: 'Communication',
      description: 'Translating complex statistical metrics and ML findings into intuitive visual stories for non-technical stakeholders.',
      icon: 'MessageSquare'
    },
    {
      title: 'Fast Learning',
      description: 'Quick adoption of emerging frameworks, cloud data tools, and modern machine learning techniques.',
      icon: 'Zap'
    }
  ],
  socials: {
    github: 'https://github.com/vasammani',
    linkedin: 'https://www.linkedin.com/in/vasam-maniteja-3555b236b',
    email: 'vasammaniteja7@gmail.com',
    kaggle: 'https://kaggle.com/vasammaniteja'
  },
  resume: {
    downloadUrl: '#resume',
    viewUrl: '#resume-viewer',
    lastUpdated: 'August 2026',
    summary: 'Data Science undergraduate with practical expertise in Exploratory Data Analysis, Machine Learning (Supervised & Unsupervised), SQL queries, and Power BI dashboards.'
  }
};

export const SKILLS_DATA: SkillItem[] = [
  // Programming
  {
    name: 'Python',
    category: 'Programming',
    proficiency: 92,
    level: 'Proficient',
    iconName: 'Terminal',
    description: 'Primary language for data manipulation, algorithmic modeling, automation, and statistical scripting.',
    tags: ['OOP', 'Scripting', 'Data Structures', 'ETL Pipelines']
  },
  {
    name: 'SQL',
    category: 'Programming',
    proficiency: 88,
    level: 'Advanced',
    iconName: 'Database',
    description: 'Complex querying, joins, aggregate functions, subqueries, indexing, and relational schema management.',
    tags: ['JOINs', 'Aggregations', 'Window Functions', 'Query Optimization']
  },
  {
    name: 'Java',
    category: 'Programming',
    proficiency: 78,
    level: 'Intermediate',
    iconName: 'Coffee',
    description: 'Object-Oriented Programming (OOP), modular architecture, data structures, and core software engineering.',
    tags: ['OOP', 'Collections', 'Design Patterns']
  },
  {
    name: 'R',
    category: 'Programming',
    proficiency: 72,
    level: 'Intermediate',
    iconName: 'FileCode2',
    description: 'Exploratory statistical modeling, hypothesis testing, ANOVA, and ggplot2 visual generation.',
    tags: ['Statistical Testing', 'ggplot2', 'Data Frames']
  },

  // Data Analysis
  {
    name: 'Pandas',
    category: 'Data Analysis',
    proficiency: 94,
    level: 'Proficient',
    iconName: 'Table',
    description: 'Data wrangling, cleaning missing values, multi-indexing, grouping, merging, and time-series transformation.',
    tags: ['Data Wrangling', 'DataFrame Manipulation', 'Aggregation', 'Missing Data Handling']
  },
  {
    name: 'NumPy',
    category: 'Data Analysis',
    proficiency: 90,
    level: 'Proficient',
    iconName: 'Binary',
    description: 'N-dimensional arrays, vectorization, linear algebra calculations, broadcasting, and matrix mathematics.',
    tags: ['Vectorization', 'Matrix Operations', 'Broadcasting', 'Scientific Computing']
  },

  // Data Visualization
  {
    name: 'Matplotlib',
    category: 'Data Visualization',
    proficiency: 88,
    level: 'Advanced',
    iconName: 'LineChart',
    description: 'Custom plotting, subplots, distribution curves, scatter plots, error bars, and publication-ready graphics.',
    tags: ['Subplots', 'Histograms', 'Custom Styles', 'Figure Customization']
  },
  {
    name: 'Seaborn',
    category: 'Data Visualization',
    proficiency: 90,
    level: 'Proficient',
    iconName: 'BarChart3',
    description: 'Statistical data visualization, heatmaps, pairplots, violin plots, and correlation matrix generation.',
    tags: ['Heatmaps', 'Pairplots', 'Correlation Matrices', 'Distribution Plots']
  },
  {
    name: 'Power BI',
    category: 'Data Visualization',
    proficiency: 86,
    level: 'Advanced',
    iconName: 'LayoutDashboard',
    description: 'Interactive business intelligence reports, DAX calculated measures, KPI tiles, and dynamic drill-downs.',
    tags: ['DAX', 'Interactive Dashboards', 'KPI Tracking', 'Data Modeling']
  },
  {
    name: 'Tableau',
    category: 'Data Visualization',
    proficiency: 80,
    level: 'Intermediate',
    iconName: 'PieChart',
    description: 'Visual storytelling, calculated fields, dashboard actions, parameter controls, and geospatial mapping.',
    tags: ['Storyboards', 'Calculated Fields', 'Visual Analytics', 'Geomapping']
  },

  // Machine Learning
  {
    name: 'Scikit-learn',
    category: 'Machine Learning',
    proficiency: 90,
    level: 'Proficient',
    iconName: 'Cpu',
    description: 'Complete ML pipelines, cross-validation, grid search hyperparameter tuning, and metric evaluation.',
    tags: ['Pipelines', 'GridSearchCV', 'Feature Scaling', 'Model Evaluation']
  },
  {
    name: 'Regression',
    category: 'Machine Learning',
    proficiency: 92,
    level: 'Proficient',
    iconName: 'TrendingUp',
    description: 'Linear Regression, Ridge, Lasso, Polynomial Regression, Decision Trees, and Random Forest Regressors.',
    tags: ['Linear Regression', 'Lasso & Ridge', 'Random Forest', 'R² & RMSE Evaluation']
  },
  {
    name: 'Classification',
    category: 'Machine Learning',
    proficiency: 88,
    level: 'Advanced',
    iconName: 'CheckCircle2',
    description: 'Logistic Regression, Support Vector Machines (SVM), Random Forests, Naive Bayes, and Gradient Boosting.',
    tags: ['Logistic Regression', 'ROC-AUC', 'Confusion Matrix', 'Decision Trees']
  },
  {
    name: 'Clustering',
    category: 'Machine Learning',
    proficiency: 85,
    level: 'Advanced',
    iconName: 'Boxes',
    description: 'K-Means clustering, Hierarchical Agglomerative clustering, DBSCAN, Elbow method, and Silhouette analysis.',
    tags: ['K-Means', 'Silhouette Score', 'Elbow Method', 'PCA Dimensionality Reduction']
  },

  // Databases
  {
    name: 'MySQL',
    category: 'Databases',
    proficiency: 88,
    level: 'Advanced',
    iconName: 'Server',
    description: 'Relational database design, ACID compliance, stored procedures, indexing, and foreign key relations.',
    tags: ['Schema Design', 'Stored Procedures', 'Indexing', 'Transactions']
  },
  {
    name: 'PostgreSQL',
    category: 'Databases',
    proficiency: 82,
    level: 'Intermediate',
    iconName: 'Database',
    description: 'Advanced relational operations, JSONB document querying, CTEs (Common Table Expressions), and window functions.',
    tags: ['JSONB', 'CTEs', 'Window Functions', 'Data Integrity']
  },

  // Tools
  {
    name: 'Jupyter Notebook',
    category: 'Tools',
    proficiency: 95,
    level: 'Proficient',
    iconName: 'BookOpen',
    description: 'Interactive computational notebooks for iterative EDA, step-by-step model prototyping, and rich visualizations.',
    tags: ['Exploratory Data Analysis', 'Prototyping', 'Markdown Documentation', 'IPython']
  },
  {
    name: 'Git',
    category: 'Tools',
    proficiency: 86,
    level: 'Advanced',
    iconName: 'GitBranch',
    description: 'Version control system, branching workflows, commits, rebasing, merge conflict resolution, and history logs.',
    tags: ['Version Control', 'Branching', 'Merge Workflows', 'Commit Discipline']
  },
  {
    name: 'GitHub',
    category: 'Tools',
    proficiency: 90,
    level: 'Proficient',
    iconName: 'GitPullRequest',
    description: 'Open-source repository management, markdown documentation, collaborative pull requests, and project hosting.',
    tags: ['Repo Management', 'Documentation', 'Collaboration', 'Releases']
  },
  {
    name: 'Microsoft Excel',
    category: 'Tools',
    proficiency: 90,
    level: 'Proficient',
    iconName: 'FileSpreadsheet',
    description: 'Advanced VLOOKUP/XLOOKUP formulas, Pivot Tables, conditional formatting, data validation, and chart generation.',
    tags: ['Pivot Tables', 'VLOOKUP/XLOOKUP', 'Statistical Functions', 'Data Cleaning']
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'project-house-price',
    title: 'House Price Prediction',
    description: 'Built a machine learning model to predict house prices using property-related features.',
    technologies: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Regression'],
    problemStatement: 'Homebuyers, sellers, and real estate appraisers often struggle to estimate fair property valuation due to fluctuating market trends and complex multi-feature interactions (square footage, bedroom counts, location tier, construction age).',
    keyResults: [
      'Achieved an R² Score of 0.89 on test data with minimal overfitting through Ridge regularization',
      'Reduced Mean Absolute Error (MAE) by 18.4% by applying log-transformation on skewed price distributions',
      'Engineered location-grade interaction features that improved predictive fidelity by 14%'
    ],
    githubUrl: 'https://github.com/vasammani/house-price-prediction',
    liveDemoUrl: '#demo-house-price',
    demoType: 'house-price',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80',
    category: 'Machine Learning',
    datasetUsed: 'Kaggle House Prices Advanced Regression Dataset (1,460 instances, 79 explanatory variables)',
    architecture: [
      'Data Ingestion & Missing Value Imputation (Median for numerical, Mode for categorical)',
      'Feature Engineering (Total SqFt = GrLivArea + TotalBsmtSF, Overall Quality Encoding)',
      'Multicollinearity Check via Variance Inflation Factor (VIF < 5)',
      'Model Training: Compared Linear, Ridge, Lasso, and Gradient Boosted Regressors',
      'Hyperparameter Optimization with 5-Fold Cross-Validation'
    ],
    highlightedMetrics: [
      { label: 'R² Score', value: '0.892', positive: true },
      { label: 'RMSE', value: '$18,420', positive: true },
      { label: 'Latency', value: '< 8ms' }
    ]
  },
  {
    id: 'project-sales-dashboard',
    title: 'Sales Data Analysis Dashboard',
    description: 'Analyzed sales data to identify revenue trends, top-performing products, customer behavior, and business insights.',
    technologies: ['Python', 'Pandas', 'Power BI', 'Data Visualization'],
    problemStatement: 'Retail management lacked a centralized real-time analytics mechanism to monitor regional sales discrepancies, profit margins by SKU category, customer acquisition costs, and seasonal inventory demand fluctuations.',
    keyResults: [
      'Constructed a dynamic Power BI & Python analytics suite processing 50,000+ transaction line items',
      'Identified that the top 20% of product SKUs generate 68% of total gross profit margin',
      'Discovered a recurring 28% Q4 festive sales surge, optimizing holiday inventory buffer planning'
    ],
    githubUrl: 'https://github.com/vasammani/sales-data-analysis-dashboard',
    liveDemoUrl: '#demo-sales-dashboard',
    demoType: 'sales-dashboard',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    category: 'Data Analytics & BI',
    datasetUsed: 'Global Superstore Multi-Year Retail Transaction Dataset (51,290 records)',
    architecture: [
      'ETL Pipeline using Pandas for datetime extraction, currency normalization, and outlier removal',
      'Relational Star-Schema modeling (Fact_Sales, Dim_Customer, Dim_Product, Dim_Date)',
      'DAX Calculated Measures (YTD Revenue, MoM Growth %, Customer Lifetime Value)',
      'Interactive Power BI visual report with regional drill-through slices and KPI cards'
    ],
    highlightedMetrics: [
      { label: 'Records Analyzed', value: '50,000+' },
      { label: 'Profit Visibility', value: '+34%', positive: true },
      { label: 'Dashboard KPIs', value: '12 Active' }
    ]
  },
  {
    id: 'project-customer-segmentation',
    title: 'Customer Segmentation',
    description: 'Used clustering techniques to segment customers based on purchasing behavior and identify different customer groups.',
    technologies: ['Python', 'Pandas', 'Scikit-learn', 'K-Means', 'Matplotlib'],
    problemStatement: 'Generic marketing campaigns yielded low conversion rates (under 2.5%) because promotional offers were not tailored to customer spending capability and annual income profiles.',
    keyResults: [
      'Segmented retail customers into 4 distinct behavioral clusters using K-Means and Silhouette validation',
      'Identified the "High Income - High Spenders" target cohort for VIP rewards programs',
      'Boosted simulated marketing campaign efficiency by 27% through targeted persona messaging'
    ],
    githubUrl: 'https://github.com/vasammani/customer-segmentation-kmeans',
    liveDemoUrl: '#demo-customer-segmentation',
    demoType: 'customer-segmentation',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    category: 'Unsupervised Learning',
    datasetUsed: 'Mall Customer Segmentation Dataset (Income, Spending Score, Age, Loyalty Score)',
    architecture: [
      'Exploratory Data Analysis & correlation heatmaps with Seaborn',
      'StandardScaler normalization of continuous demographic features',
      'Optimal Cluster Determination via WCSS (Elbow Method) and Silhouette Analysis (k=4)',
      '2D/3D Scatter visual clustering projection with centroid centroids mapping'
    ],
    highlightedMetrics: [
      { label: 'Clusters (k)', value: '4 Segments' },
      { label: 'Silhouette Score', value: '0.648', positive: true },
      { label: 'Target Accuracy', value: '94.2%', positive: true }
    ]
  },
  {
    id: 'project-movie-recommender',
    title: 'Movie Recommendation System',
    description: 'Developed a recommendation system that suggests movies based on user preferences and movie similarity.',
    technologies: ['Python', 'Pandas', 'Scikit-learn', 'Machine Learning'],
    problemStatement: 'Online streaming users spend an average of 14 minutes scrolling through thousands of titles before choosing content, causing discovery fatigue and platform drop-offs.',
    keyResults: [
      'Engineered a content-based recommendation engine utilizing TF-IDF vectorization and Cosine Similarity',
      'Calculated multidimensional similarity matrices over 5,000+ movies in under 12 milliseconds',
      'Achieved a 92% genre-and-theme match accuracy in user evaluation test queries'
    ],
    githubUrl: 'https://github.com/vasammani/movie-recommendation-system',
    liveDemoUrl: '#demo-movie-recommender',
    demoType: 'movie-recommender',
    image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=800&q=80',
    category: 'Recommender Systems',
    datasetUsed: 'TMDB 5000 Movies & Credits Dataset',
    architecture: [
      'Metadata Tag Creation: Combined overview, genres, top cast, keywords, and director',
      'Text Preprocessing: Lowercasing, punctuation stripping, and Porter Stemming',
      'Vectorization using CountVectorizer & TF-IDF with top 5,000 max features',
      'Cosine Similarity Matrix computation with indexed top-N nearest neighbor lookup'
    ],
    highlightedMetrics: [
      { label: 'Movie Database', value: '5,000+ Titles' },
      { label: 'Lookup Time', value: '< 12ms', positive: true },
      { label: 'Genre Precision', value: '92.4%', positive: true }
    ]
  },
  {
    id: 'project-student-performance',
    title: 'Student Performance Prediction',
    description: 'Developed a machine learning model to analyze student-related factors and predict academic performance.',
    technologies: ['Python', 'Pandas', 'Scikit-learn', 'Data Analysis'],
    problemStatement: 'Educational institutions need early-warning indicators to detect students at risk of underperforming before midterm assessments occur, enabling timely academic tutoring interventions.',
    keyResults: [
      'Trained Random Forest and Logistic Regression classifiers achieving 91.4% predictive accuracy',
      'Discovered that consistent weekly study hours and attendance rates accounted for 42% of score variance',
      'Constructed an automated risk scoring system that flags struggling students 4 weeks before final exams'
    ],
    githubUrl: 'https://github.com/vasammani/student-performance-prediction',
    liveDemoUrl: '#demo-student-performance',
    demoType: 'student-performance',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80',
    category: 'Predictive Modeling',
    datasetUsed: 'UCI Machine Learning Repository Student Performance Dataset (Math & Language tracks)',
    architecture: [
      'Feature Selection: Study time, attendance %, parental education, extracurriculars, past exam scores',
      'Categorical One-Hot Encoding and RobustScaler normalization',
      'Model Benchmarking: Decision Trees vs. Random Forest vs. Support Vector Classifier (SVC)',
      'Model interpretability via Feature Importance ranking and Confusion Matrix evaluation'
    ],
    highlightedMetrics: [
      { label: 'Accuracy', value: '91.4%', positive: true },
      { label: 'F1-Score', value: '0.898', positive: true },
      { label: 'Early Detection', value: '4 Weeks Prior' }
    ]
  }
];

export const CERTIFICATES_DATA: Certificate[] = [
  {
    id: 'cert-python',
    name: 'Python for Data Science & Machine Learning',
    issuer: 'Coursera / DeepLearning.AI',
    date: 'March 2025',
    credentialId: 'PY-DS-882941',
    verificationUrl: 'https://coursera.org/verify/sample-py-ds',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80',
    skillsCovered: ['Python Core', 'NumPy', 'Pandas', 'OOP for Data Science', 'Data Structures'],
    description: 'Comprehensive certification covering programmatic data structures, vectorization, algorithmic scripting, and statistical computing with Python.',
    badgeColor: 'blue'
  },
  {
    id: 'cert-data-science',
    name: 'Data Science Professional Certificate',
    issuer: 'IBM / Coursera',
    date: 'June 2025',
    credentialId: 'IBM-DS-910243',
    verificationUrl: 'https://coursera.org/verify/sample-ibm-ds',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80',
    skillsCovered: ['Exploratory Data Analysis', 'Statistical Inference', 'Data Wrangling', 'Methodology'],
    description: 'Hands-on practical training on real-world data pipelines, exploratory analysis, hypothesis validation, and executive report synthesis.',
    badgeColor: 'indigo'
  },
  {
    id: 'cert-machine-learning',
    name: 'Machine Learning Specialization',
    issuer: 'Stanford Online / DeepLearning.AI',
    date: 'October 2025',
    credentialId: 'STAN-ML-773412',
    verificationUrl: 'https://coursera.org/verify/sample-stanford-ml',
    image: 'https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&w=600&q=80',
    skillsCovered: ['Supervised Learning', 'Unsupervised Learning', 'Regularization', 'Gradient Descent', 'Scikit-learn'],
    description: 'In-depth mastery of core ML theory, cost functions, gradient descent, linear & logistic regression, decision trees, K-Means clustering, and model evaluation.',
    badgeColor: 'cyan'
  },
  {
    id: 'cert-sql',
    name: 'SQL for Data Analytics & Database Design',
    issuer: 'HackerRank / Udemy',
    date: 'January 2026',
    credentialId: 'SQL-ADV-554109',
    verificationUrl: 'https://hackerrank.com/certificates/sample-sql',
    image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=600&q=80',
    skillsCovered: ['Complex JOINs', 'Subqueries', 'Window Functions', 'MySQL', 'PostgreSQL Schema Design'],
    description: 'Demonstrated 5-star proficiency in writing performant queries, multi-table aggregations, stored procedures, and relational data architecture.',
    badgeColor: 'emerald'
  },
  {
    id: 'cert-powerbi-tableau',
    name: 'Power BI & Tableau Data Visualization',
    issuer: 'Microsoft / Coursera',
    date: 'April 2026',
    credentialId: 'MS-BI-339812',
    verificationUrl: 'https://microsoft.com/learn/certifications/sample-bi',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80',
    skillsCovered: ['Power BI', 'DAX Measures', 'Tableau Desktop', 'Visual Storytelling', 'KPI Dashboards'],
    description: 'Advanced business intelligence certification in creating interactive dashboards, DAX queries, data modeling, and executive KPI reporting.',
    badgeColor: 'amber'
  }
];
