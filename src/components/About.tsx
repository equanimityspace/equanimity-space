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

function About() {
  return (
    <div className="py-5">
      <div className="row mb-5">
        <div className="col-12 text-center">
          <h2 className="display-5 fw-bold text-white">
            Programming is More Than a Job
          </h2>
          <hr className="w-25 mx-auto border-purple" />
        </div>
      </div>
      <figure className="row mb-5 border-quote">
        <blockquote className="blockquote mb-2">
          <p className="mt-3 fs-4 text-secondary">
            Hello! My name is Ryan Cutrone. I am a prospective junior developer
            looking to help program solutions for tomorrow's problems.
          </p>

          <p className="fs-4 text-secondary">
            I have a background in development with webdev technologies (Node,
            React, Postgress) as well as Python, Rust, and more.
          </p>

          <p className="mb-3 fs-4 text-secondary">
            Moreover, my eagerness to learn, ability to creatively problem
            solve, and proven experience working as a part of a team in
            high-stress environments are skills that are just as important as my
            technical ability.
          </p>
        </blockquote>
      </figure>
    </div>
  );
}

export default About;
