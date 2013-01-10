window.TB = {} if not window.TB

loaded = false
triggered = false
diagnostic_swf = {}
callback = {}

window.TB.runTests = (_done) ->
  triggered = true
  callback = _done
  diagnostic_swf.startTests() if loaded

window.addEventListener "load", () ->
  div = document.createElement "div"
  div.setAttribute "id", "diagnostic_swf"
  document.body.appendChild div

  ts = Math.round(new Date().getTime() / 1000)
  params = {}
  params.allowscriptaccess = "always"

  swfobject.embedSWF("http://static.opentok.com/opentok/assets/flash/user-diagnostic/Diagnostic.swf?" + ts, "diagnostic_swf", "1", "1", "8", null, null, params, null)

window.loadedSwf = () ->
  loaded = true
  diagnostic_swf = swfobject.getObjectById "diagnostic_swf"
  diagnostic_swf.startTests() if triggered

window.testsCompleted = (data) ->
  data = JSON.parse data
  callback.call TB, data if callback
