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


interface CardProps {
  header: string;
  description: string;
  text?: string;
  url: string;
  url_label: string;
}

function Card({ header, description, text, url, url_label }: CardProps) {
  return (
    <div className="card text-bg-dark" style={{ width: "25rem" }}>
      <div className="card-header">{header}</div>
      <div className="card-body">
        <h5 className="card-description">{description}</h5>
        <p className="card-text">{text}</p>
        <a
          href={url}
          className="btn btn-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          {url_label}
        </a>
      </div>
    </div>
  );
}

export default Card;
