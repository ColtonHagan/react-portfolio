/**
 * AnimatedLetters.js
 * 
 * Description: This file animates the letters with a individual bounceIn effect.
 * Author: Colton Hagan
 * Created: 5/31/2023
 */
import "./index.scss";

const AnimatedLetters = ({ letterClass, strArray, idx }) => {
    return (
        <span>
            {strArray.map((char, i) => (
                <span key={char + i} className={`${letterClass} _${i + idx}`}>
                    {char}
                </span>
            ))}
        </span>
    );
};

export default AnimatedLetters;
