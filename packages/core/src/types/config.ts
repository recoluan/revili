import type {DefineKitReturn} from '@revili/shared/node'
export interface SidebarItem {
  title: string
  route: string
  icon?: string
}

export interface LayoutOption {
  title: string
  route: string
  children: SidebarItem[]
  icon?: string
}

export interface AppOptions<T = string> {
  layoutOptions: LayoutOption[]
  plugins: Array<T>
  [prop: string]: any
}

export type AppConfig = AppOptions<DefineKitReturn>
