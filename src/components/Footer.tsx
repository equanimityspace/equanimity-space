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

const icons = [
  {
    service: "LinkedIn",
    href: "https://www.linkedin.com/in/ryan-cutrone/",
    svg: (
    <svg
      className="size-6 transition-transform duration-200 hover:scale-110"
      xmlns="http://www.w3.org/2000/svg"
      width="3em"
      height="3em"
      fill="currentColor"
      viewBox="0 0 24 24"
    ><path
        fill="currentColor"
        d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"
        ></path>
      </svg>
    ),
  },
  {
    service: "Github",
    href: "https://github.com/equanimityspace",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="3em"
        height="3em"
        fill="currentColor"
        className="bi bi-github"
        viewBox="0 0 16 16"
      >
        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.22 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
      </svg>
    ),
  }
]

function Footer() {
  return (
    <div className="py-10 px-4 position-relative overflow-hidden">
      <hr className="w-25 mx-auto border-purple mb-5" />
      <div className="row mb-5 justify-content-center">
        <div className="col-12 d-flex justify-content-center align-items-center gap-5">
          {icons.map((icon) => (
            <a className="text-white text-decoration-none"
              key={icon.service}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={icon.service}
              href={icon.href}>
              {icon.svg}
            </a>
          ))}
        </div>
      </div>
      <div className="row mb-5 justify-content-center">
        <div className="col-12 d-flex justify-content-center align-items-center">
          <p>{"Made with </> by Ryan Cutrone"}</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
