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


import SpotlightCard from "../components/SpotlightCard";
import RustLogo from "../assets/rust.svg";

interface Project {
  id: number;
  image: string;
  image_alt: string;
  title: string;
  description: string;
  url: string;
  url_label: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Project One",
    image: RustLogo,
    image_alt: "Rust programming language logo",
    description: "A cool placeholder",
    url: "https://github.com/equanimityspace/equanimity-space",
    url_label: "View Repo",
  },
  {
    id: 2,
    title: "Project Two",
    image: RustLogo,
    image_alt: "Rust programming language logo",
    description: "Another placeholder, less cool but still cool",
    url: "https://github.com/equanimityspace/equanimity-space",
    url_label: "View Repo",
  },
];

function Projects() {
  return (
    <div
      className="position-absolute w-100 pointer-events-none"
      style={{ zIndex: 5, top: "150vh", height: "250vh" }}
    >
      {projects.map((project, index) => {
        const isEven = project.id % 2 === 0;

        // Stagger positions vertically
        const topPosition = 50 + index * 100;

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
            <SpotlightCard
              className="custom-spotlight-card d-flex flex-column"
              style={{ width: "20vw", minHeight: "190px" }}
              spotlightColor="rgba(58, 10, 140, 0.2)"
            >
              {/* top logo */}
              <img
                src={project.image}
                alt={project.image_alt}
                className="mb-3"
                style={{ width: "50px", height: "50px", objectFit: "contain" }}
              />

              {/* title */}
              <div className="h5 fw-bold text-white mb-2">{project.title}</div>

              {/* description */}
              <p className="text-secondary mb-4" style={{ fontSize: "1rem" }}>
                {project.description}
              </p>

              {/* link */}
              <div className="mt-auto d-flex justify-content-end">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-decoration-none"
                  aria-label="View Github Repository"
                >
                  {/* github logo */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    className="bi bi-github"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.22 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                  </svg>
                </a>
              </div>
            </SpotlightCard>
          </div>
        );
      })}
    </div>
  );
}

export default Projects;
