import PropTypes from "prop-types";
import styles from "./ProjectCard.module.css";




export const ProjectCard = ({
  project: { title, imageSrc, description, skills },
}) => {
  return (
    <div className={styles.container}>
      <img
        src={imageSrc}
        alt={`Image of ${title}`}
        className={styles.image}
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => {
          return (
            <li key={id} className={styles.skill}>
              {skill}
            </li>
          );
        })}
      </ul>

    </div>
  );
};


// Define PropTypes for validation
ProjectCard.propTypes = {
    project: PropTypes.shape({
      title: PropTypes.string.isRequired, // Title must be a string and is required
      imageSrc: PropTypes.string.isRequired, // Image source must be a string and is required
      description: PropTypes.string.isRequired, // Description must be a string and is required
      skills: PropTypes.arrayOf(PropTypes.string).isRequired, // Skills must be an array of strings and is required
    }).isRequired,
  };