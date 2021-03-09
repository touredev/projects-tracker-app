import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div`
  width: 33%;
  padding-left: 2rem;
  padding-right: 2rem;
  margin-bottom: 1rem;
  box-sizing: border-box;
  border-width: 0;
  border-style: solid;
  border-color: #e5e7eb;
`;

const Wrapper = styled.section`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  flex-direction: column-reverse;
  div {
    width: 100%;
  }
`;

const Title = styled.h1`
  color: rgba(51, 51, 51, 1);
  margin-bottom: 0.75rem;
  font-size: 1.875rem;
  line-height: 2.25rem;
  letter-spacing: -0.025em;
`;

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

const Text = styled.div`
  overflow-wrap: break-word;
  word-break: break-word;
  color: rgba(97, 97, 97, 1);
  line-height: 1.375;
  font-size: 1rem;
  display: block;
`;

const Project = ({ title, tags, description }) => {
  return (
    <Container>
      <Wrapper>
        <div>
          <Title>{title}</Title>
          <Tags>
            <span>{tags}</span>
          </Tags>
          <Text>
            <p>{description}</p>
          </Text>
        </div>
      </Wrapper>
    </Container>
  );
};

Project.defaultProps = {
  title: "Project",
};

Project.propTypes = {
  title: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  description: PropTypes.string,
};

export default Project;
