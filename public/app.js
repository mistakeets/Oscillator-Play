'use strict'

var audioContext = new AudioContext()
window.onload = function() {
  var onOff = document.getElementById('on-off')
  var span = document.getElementsByTagName('span')[0]
  var osc = false
  var freqSliderVal = document.getElementsByTagName('input')[1].value
  var selectedWaveform = 'sawtooh'
  var waveformTypes = document.getElementsByTagName('li')

  function select() {
    var selectedWaveformElement = document.getElementById(this.id)

    selectedWaveform = document.getElementById(this.id).id
    console.log(selectedWaveform)

    for (var i = 0; i < waveformTypes.length; i += 1) {
      waveformTypes[i].classList.remove('selected-waveform')
    }

    selectedWaveformElement.classList.add('selected-waveform')
  }

  for (var i = 0; i < waveformTypes.length; i++) {
    waveformTypes[i].addEventListener('click', select)
  }
}
