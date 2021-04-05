import { Link } from "react-router-dom";
import styled from "styled-components";
import { IconContext } from "react-icons";
import { TiStarburst } from "react-icons/ti";
import PropTypes from "prop-types";

const titleStyle = {
  color: "rgba(51, 51, 51, 1)",
  marginBottom: "0.75rem",
  lineHeight: "2.25rem",
  cursor: "pointer",
};

const Tags = styled.div`
  color: rgba(0, 0, 238, 1);
  margin-bottom: 0.75rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: row;
`;

const iconColor = (status) => {
  const colors = {
    "in-progress": "yellow !important",
    done: "green",
    "to-do": "red",
  };
  return colors[status];
};

const Project = ({ id, title, tags, description, status }) => {
  return (
    <div className="section m-0 pt-0 pb-5">
      <div className="is-flex">
        <div>
          <Link to={`/projects/${id}`} style={{ textDecoration: "none" }}>
            <h1
              className="title is-4 has-text-weight-semibold"
              style={titleStyle}
            >
              {title}
              <span className="icon is-medium">
                <IconContext.Provider
                  value={{
                    style: {
                      verticalAlign: "middle",
                      color: iconColor(status),
                      height: "0.8em",
                      width: "0.8em",
                      paddingLeft: "0.7em",
                    },
                  }}
                >
                  <TiStarburst />
                </IconContext.Provider>
              </span>
            </h1>
          </Link>

          <Tags>
            <span>{tags.map((tag) => `#${tag}`).join(", ")}</span>
          </Tags>
          <div
            className="content is-normal"
            style={{ overflowWrap: "break-word", wordBreak: "break-word" }}
          >
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

Project.defaultProps = {
  title: "Project",
};

Project.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  description: PropTypes.string,
  status: PropTypes.string.isRequired,
};

export default Project;
