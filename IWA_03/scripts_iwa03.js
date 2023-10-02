// scripts.js

import {company} from './configurations.js'
import {year} from './configurations.js'

console.log(company, year);

const message = '© ' + company + ' (' + year + ')'
document.querySelector('footer').innerText = message