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


import Card from "../components/Card";

interface Project {
  id: number;
  title: string;
  description: string;
  url: string;
  url_label: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Project One",
    description: "A cool placeholder",
    url: "https://github.com/equanimityspace/equanimity-space",
    url_label: "View Repo",
  },
  {
    id: 2,
    title: "Project Two",
    description: "Another placeholder, less cool but still cool",
    url: "https://github.com/equanimityspace/equanimity-space",
    url_label: "View Repo",
  },
];

function Project() {
  return (
    <div
      className="position-absolute w-100 h-100 top-0 start-0 pointer-events-none"
      style={{ zIndex: 5 }}
    >
      {projects.map((project, index) => {
        const isEven = project.id % 2 === 0;

        // Stagger positions vertically
        const topPosition = 200 + index * 80;

        return (
          <div
            key={project.id}
            style={{
              position: "absolute",
              top: `${topPosition}vh`,
              // even cards on right, odd on left
              left: isEven ? "75%" : "15%",
              pointerEvents: "auto",
            }}
          >
            <Card
              header={project.title}
              description={project.description}
              url={project.url}
              url_label={project.url_label}
            />
          </div>
        );
      })}
    </div>
  );
}

export default Project;
