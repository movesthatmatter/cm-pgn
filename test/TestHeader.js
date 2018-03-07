/**
 * Author: shaack
 * Date: 07.03.2018
 */

import {Test} from "../node_modules/svjs-test/src/svjs-test/Test.js";
import {Pgn} from "../src/cm-pgn/Pgn.js";

export class TestHeader extends Test {
    testHeader() {
        const pgn = new Pgn();
        pgn.readHeader(`[Event "F/S Return Match"]
            [Site "Belgrade, Serbia JUG"]
            [Date "1992.11.04"]
            [Round "29"]
            [White "Fischer, Robert J."]
            [Black "Spassky, Boris V."]
            [Result "1/2-1/2"]`);
        console.log(pgn.model);
        Test.assertEquals(7, pgn.model.header.size);
        Test.assertEquals("F/S Return Match", pgn.model.header.get("Event"));
    }
}