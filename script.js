import translitEngine from 'translitit-engine';
import {table} from './lib/prudeus-ua-table'
const inputForm = document.querySelector('#input_form');
const outputForm = document.querySelector('#output_form');
const transliterate = translitEngine(table)

inputForm.addEventListener('submit', e => {
    e.preventDefault();
    const inputText = e.target.querySelector('#input_text').value
    const transcription = transliterate(inputText)
    outputForm.querySelector('#output_text').value = transcription
})

outputForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const copyTextarea = event.target.querySelector("#output_text");
    copyTextarea.focus();
    copyTextarea.select();
    navigator.clipboard.writeText(copyTextarea.value);
  });




