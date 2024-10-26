export enum AppRoutes {
  MAIN = 'main',
  LOGIN = 'login',
  REGISTRATION = 'registration',
  //   SETTINGS = 'settings',
  ABOUT = 'about',
  PROFILE = 'profile',
  COURSE = 'course',
  COURSES = 'courses',
  TESTS = 'tests',
  TEST = 'test',
  MBTI = 'mbti',
  REASIC = 'reasic',
  ENNEAGRAMMA = 'enneagramma',
  EIGHT_SPHERES_OF_LIFE = 'eight_spheres_of_life',
  //   ARTICLES = 'articles',
  //   ARTICLE_DETAILS = 'article_details',
  //   ARTICLE_CREATE = 'article_create',
  //   ARTICLE_EDIT = 'article_edit',
  //   ADMIN_PANEL = 'admin_panel',
  RESULTS = 'results',
  TEST_INFO = 'test_info',
  TYPES = 'types',
  RECOMMENDATIONS = 'recommendations',
  FORBIDDEN = 'forbidden',
  // last
  NOT_FOUND = 'not_found',
}

export const getRouteMain = () => '/';
export const getRouteLogin = () => '/login';
export const getRouteRegistration = () => '/registration';
export const getRouteAbout = () => '/about';
// export const getRouteSettings = () => '/settings';
export const getRouteProfile = (id: string) => `/profile/${id}`;
export const getRouteCourse = (id: string) => `/course/${id}`;
export const getRouteCourses = () => `/courses`;
export const getRouteMBTI = () => '/tests/mbti';
export const getRouteREASIC = () => '/tests/reasic';
export const getRouteEnneagramma = () => '/tests/enneagramma';
export const getRouteEightSpheresOfLife = () => '/tests/eight-spheres-of-life';
export const getRouteTests = () => `/tests`;
export const getRouteResults = (testId: string, userId: string) =>
  `/results/${testId}/${userId}`;
export const getRouteTestInfo = (testId: string) => `/tests/${testId}/info`;
export const getRouteTypes = (typeId: string) => `/types/${typeId}`;
export const getRouteTest = (testId: string) => `/test/${testId}`;
export const getRouteRecommendations = () => '/recommendations';
// export const getRouteArticles = () => '/articles';
// export const getRouteArticleDetails = (id: string) => `/articles/${id}`;
// export const getRouteArticleCreate = () => '/articles/new';
// export const getRouteArticleEdit = (id: string) => `/articles/${id}/edit`;
// export const getRouteAdmin = () => '/admin';
export const getRouteForbidden = () => '/forbidden';

export const AppRouteByPathPattern: Record<string, AppRoutes> = {
  [getRouteMain()]: AppRoutes.MAIN,
  [getRouteLogin()]: AppRoutes.LOGIN,
  [getRouteRegistration()]: AppRoutes.REGISTRATION,
  //   [getRouteSettings()]: AppRoutes.SETTINGS,
  [getRouteAbout()]: AppRoutes.ABOUT,
  [getRouteProfile(':id')]: AppRoutes.PROFILE,
  [getRouteCourse(':id')]: AppRoutes.COURSE,
  [getRouteCourses()]: AppRoutes.COURSES,
  [getRouteTest(':id')]: AppRoutes.TEST,
  [getRouteTests()]: AppRoutes.TESTS,
  [getRouteMBTI()]: AppRoutes.MBTI,
  [getRouteREASIC()]: AppRoutes.REASIC,
  [getRouteEnneagramma()]: AppRoutes.ENNEAGRAMMA,
  [getRouteEightSpheresOfLife()]: AppRoutes.EIGHT_SPHERES_OF_LIFE,
  //   [getRouteArticles()]: AppRoutes.ARTICLES,
  //   [getRouteArticleDetails(':id')]: AppRoutes.ARTICLE_DETAILS,
  //   [getRouteArticleCreate()]: AppRoutes.ARTICLE_CREATE,
  //   [getRouteArticleEdit(':id')]: AppRoutes.ARTICLE_EDIT,
  //   [getRouteAdmin()]: AppRoutes.ADMIN_PANEL,
  [getRouteForbidden()]: AppRoutes.FORBIDDEN,
};
