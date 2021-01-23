export default ({ sigma, settings }) => {
  sigma.settings(settings)
  sigma.refresh()
  return null
}
