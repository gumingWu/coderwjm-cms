const genRoutePath = (routePath) => {
  return routePath.split('/').slice(2).join('/')
}
const genViewPath = (viewPath) => {
  return `@${viewPath.split('src')[1]}`
}

export const genRouterTemplate = (routePath, viewName, viewPath) => {
  return `export default {
name: '${viewName}',
path: '${genRoutePath(routePath)}',
component: import('${genViewPath(viewPath)}/index.vue')
}`
}
