import DebugConfig from '../config/DebugConfig'
import ReduxPersist from '../config/ReduxPersist'
import { persistStore } from 'redux-persist'

const updateReducers = (store) => {
  const reducerVersion = ReduxPersist.reducerVersion
  const startup = () => store.dispatch({type:`noop`})

  // Check to ensure latest reducer version
  const localVersion = window.localStorage.getItem('reducerVersion')

  if (localVersion !== reducerVersion) {
    if (DebugConfig.useReactotron) {
      console.tron.display({
        name: 'PURGE',
        value: {
          'Old Version:': localVersion,
          'New Version:': reducerVersion
        },
        preview: 'Reducer Version Change Detected',
        important: true
      })
    }
    // Purge store
    persistStore(store, null, startup).purge()
    window.localStorage.setItem('reducerVersion', reducerVersion)
  } else {
    persistStore(store, null, startup)
  }

}

export default { updateReducers }