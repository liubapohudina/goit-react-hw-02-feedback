import PropTypes from "prop-types";
import styles from './statistics.module.css';


// export class Statistics extends Component {
//     render() {
//         const { good, neutral, bad, total, positivePercentage } = this.props;
//         return    <>
//             <ul className={styles.statList}>
//                     <li className={styles.text}>Good: {good}</li>
//                     <li className={styles.text}>Neautral: {neutral}</li>
//                     <li className={styles.text}>Bad: {bad}</li>
//                 <li className={styles.text}>Total: {total}</li>
//                 <li className={styles.text}>Positive feedback: {positivePercentage}%</li>
//             </ul>
//         </>
//     }
// }  
export function Statistics({ good, neutral, bad, total, positivePercentage }) {
    return (
      <>
             <ul className={styles.statList}>
                  <li className={styles.text}>Good: {good}</li>
                   <li className={styles.text}>Neautral: {neutral}</li>
                    <li className={styles.text}>Bad: {bad}</li>
                <li className={styles.text}>Total: {total}</li>
                <li className={styles.text}>Positive feedback: {positivePercentage}%</li>
            </ul>
        </>
  )
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.string.isRequired,
}
