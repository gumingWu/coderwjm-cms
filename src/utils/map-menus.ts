import type { RouteRecordRaw } from 'vue-router'
import { menuRouteType } from '@/router/type'
import { IBreadcrumb } from '@/components/nav-header/src/nav-breadcrumb'

export function mapMenusToRoutes(userMenus: any[]): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = []

  // 1. 先加载默认所有的routes
  const allRoutes: RouteRecordRaw[] = []
  const routeFiles = require.context('../router/main', true, /\.ts/)
  routeFiles.keys().forEach((key: string) => {
    const route = require('../router/main' + key.split('.')[1])
    allRoutes.push(route.default)
  })

  // 2. 根据菜单获取需要添加的routes
  const _recurseGetRoute = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type === 2) {
        const route = allRoutes.find((route) => route.path === menu.url)
        if (route) {
          routes.push(route)
        }
      } else {
        _recurseGetRoute(menu.children)
      }
    }
  }
  _recurseGetRoute(userMenus)

  return routes
}

export const pathMapToMenu = (
  userMenus: any[],
  currentPath: string,
  breadcrumb?: IBreadcrumb[]
): string => {
  const matchParentRoute = userMenus.find((item) =>
    currentPath.startsWith(item.url)
  )
  if (matchParentRoute) {
    const matchRoute = matchParentRoute.children.find(
      (item: menuRouteType) => item.url === currentPath
    )
    breadcrumb?.push({ name: matchParentRoute.name })
    breadcrumb?.push({ name: matchRoute.name })
    return matchRoute.id + ''
  }

  return 'a'
}

export const pathToBreadcrumb = (
  userMenus: any[],
  currentPath: string
): IBreadcrumb[] => {
  const breadcrumb: IBreadcrumb[] = []
  pathMapToMenu(userMenus, currentPath, breadcrumb)
  return breadcrumb
}
