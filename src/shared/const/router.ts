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
  //   ARTICLES = 'articles',
  //   ARTICLE_DETAILS = 'article_details',
  //   ARTICLE_CREATE = 'article_create',
  //   ARTICLE_EDIT = 'article_edit',
  //   ADMIN_PANEL = 'admin_panel',
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
export const getRouteTests = () => '/tests';
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
  [getRouteTests()]: AppRoutes.TESTS,
  //   [getRouteArticles()]: AppRoutes.ARTICLES,
  //   [getRouteArticleDetails(':id')]: AppRoutes.ARTICLE_DETAILS,
  //   [getRouteArticleCreate()]: AppRoutes.ARTICLE_CREATE,
  //   [getRouteArticleEdit(':id')]: AppRoutes.ARTICLE_EDIT,
  //   [getRouteAdmin()]: AppRoutes.ADMIN_PANEL,
  [getRouteForbidden()]: AppRoutes.FORBIDDEN,
};
