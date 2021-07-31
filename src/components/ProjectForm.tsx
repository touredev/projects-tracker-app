import * as React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import styled from "styled-components";
import { IProjectItem } from "../types/projectTypes";

const FormWrapper = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h3 {
    padding-left: 10em;
  }

  form {
    margin: 0 auto;
    width: 75%;
    padding: 1em;
  }
`;

const tagsList = [
  "API",
  "Microservices",
  "React",
  "JavaScript",
  "Python",
  "Java",
  "NodeJs",
  "PostgreSQL",
  "Web",
  "AI",
  "BI",
];

type ProjectFormProps = {
  project: IProjectItem;
  formAction: (data: IProjectItem) => void;
  setEditing: (editingStatus: boolean) => void;
};

const ProjectForm = ({
  project,
  formAction,
  setEditing,
}: ProjectFormProps): React.ReactElement => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IProjectItem>();

  const onSubmit: SubmitHandler<IProjectItem> = async (data: IProjectItem) => {
    formAction({ ...data, id: project.id });
  };

  const { title, description, tags, status } = project;

  return (
    <FormWrapper>
      <h3 className="title is-3">Edit Project</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="field is-horizontal">
          <div className="field-label is-normal">
            <label className="label" htmlFor="title">
              Title:
            </label>
          </div>
          <div className="field-body">
            <div className="field">
              <div className="control">
                <input
                  defaultValue={title}
                  className="input is-danger"
                  type="text"
                  placeholder="Title"
                  {...register("title", { required: true })}
                />
              </div>
              <p className="help is-danger">
                {errors.title && "Title is required!"}
              </p>
            </div>
          </div>
        </div>
        <div className="field is-horizontal">
          <div className="field-label is-normal">
            <label className="label" htmlFor="description">
              Description:
            </label>
          </div>
          <div className="field-body">
            <div className="field">
              <div className="control">
                <textarea
                  className="textarea"
                  rows={7}
                  cols={40}
                  defaultValue={description}
                  placeholder="Description"
                  {...register("description")}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="field is-horizontal">
          <div className="field-label is-normal">
            <label className="label" htmlFor="status">
              Status:
            </label>
          </div>
          <div className="field-body">
            <div className="field is-narrow">
              <div className="control">
                <div className="select is-fullwidth is-rounded is-info">
                  <select {...register("status")} defaultValue={status}>
                    {["to-do", "in-progress", "done"].map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="field is-horizontal pt-3">
          <div className="field-label">
            <label className="label" htmlFor="tags">
              Tags:
            </label>
          </div>
          <div className="field-body">
            <div className="field is-grouped is-flex is-flex-wrap-wrap">
              <div className="control" style={{ maxWidth: "100%" }}>
                {tagsList.map((t, i) => {
                  return (
                    <label className="checkbox pr-3 pb-3" key={i}>
                      <input
                        type="checkbox"
                        value={t}
                        defaultChecked={tags.includes(t)}
                        {...register("tags")}
                      />
                      {t}
                    </label>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="field is-horizontal pt-4 pl-3">
          <div className="field-label" />
          <div className="field-body">
            <div className="field is-grouped">
              <div className="control">
                <input
                  className="button is-link"
                  type="submit"
                  value="Submit"
                />
              </div>
              <div className="control">
                <button
                  type="button"
                  className="button is-link is-light"
                  onClick={() => setEditing(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </FormWrapper>
  );
};

export default ProjectForm;
