
import tapetest from 'tape-promise/tape';

import * as main from '../build/main.js';


tapetest('test stuff', async function testProgram(t) {
    t.pass('empty test');

    t.end();
});


