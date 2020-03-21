/*import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { faCheck } from "@fortawesome/free-solid-svg-icons/faCheck";
//import { faBrands} from "@fortawesome/free-solid-svg-icons/fa-brands:twitter"

//library.add(faBrands);
library.add(faCheck);
dom.watch();*/

import {dom, library} from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faFacebookSquare} from '@fortawesome/free-brands-svg-icons'
import  {faInstagram} from '@fortawesome/free-brands-svg-icons'

//import { dom } from '@fortawesome/fontawesome-svg-core'

/*const css = dom.css();

dom.insertCss(css);*/

library.add(fas, fab, faTwitter, faFacebookSquare, faInstagram);
//dom.watch();
dom.i2svg();