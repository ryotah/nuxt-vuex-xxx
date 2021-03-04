import { accessorType } from '~/store'

// declare module 'vuex/types/index' {
//   // eslint-disable-next-line no-unused-vars,@typescript-eslint/no-unused-vars
//   interface Store<S> {
//     $accessor: typeof accessorType
//   }
// }

declare module 'vue/types/vue' {
  export interface Vue {
    $accessor: typeof accessorType
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $accessor: typeof accessorType
  }
}
