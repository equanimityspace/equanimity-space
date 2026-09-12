// This file is part of equanimity.space.
//
//    equanimity.space is free software: you can redistribute it and/or modify
//    it under the terms of the GNU Affero General Public License as published by
//    the Free Software Foundation, either version 3 of the License, or
//    (at your option) any later version.
//
//    equanimity.space is distributed in the hope that it will be useful,
//    but WITHOUT ANY WARRANTY; without even the implied warranty of
//    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
//    GNU Affero General Public License for more details.
//
//    You should have received a copy of the GNU Affero General Public License
//    along with equanimity.space.  If not, see <https://www.gnu.org/licenses/>.


import Stars from "./components/Stars";
import Projects from "./utils/Projects";
import HeaderText from "./utils/HeaderText";

import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <div className="space-container container-fluid bg-black text-white vw-100 p-0 position-relative overflow-hidden">
      <Stars />

      {/* Header */}
      <section
        className="container min-vh-100 d-flex flex-column justify-content-center align-items-center position-relative"
        style={{ zIndex: 2 }}
      >
        <HeaderText />
      </section>

      {/* Projects */}
      <section
        className="container py-5 position-relative"
        style={{ zIndex: 2 }}
      >
        <Projects />
      </section>

      <Analytics />

    </div>
  );
}

export default App
