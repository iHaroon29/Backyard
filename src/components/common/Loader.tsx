import { grid } from 'ldrs'

export const Loader = () => {
  grid.register()
  return <l-grid size='60' speed='1.5' color='black'></l-grid>
}
