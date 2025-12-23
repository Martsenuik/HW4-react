import statistics from "../components/Statistics.module.css";
export const Statistics = (props) => {
  return (
    <section className={statistics.section}>
      <h2 className={statistics.title}>Upload stats</h2>
      <ul className={statistics.statList}>
        {props.data.map(({ id, label, percentage }) => {
          return (
            <li className={statistics.item} key={id}>
              <span className={statistics.label}>{label}</span>
              <span className={statistics.percentage}>{percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
