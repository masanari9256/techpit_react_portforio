import {useEffect, useState} from "react";
import axios from "axios";
import {generateUniqueID} from "web-vitals/dist/modules/lib/generateUniqueID";

export const Skills = () => {
    const [languageList, setLanguageList] = useState([]);
    console.log(languageList);

    useEffect(() => { axios.get('https://api.github.com/users/masanari9256/repos').then((response) => console.log(response)) }, []);

    useEffect(() => {
        axios.get('https://api.github.com/users/masanari9256/repos')
            .then((response) => {
                const languageList = response.data.map(res => res.language);
                const constedLanguageList = generateLanguageCountObj(languageList);
                setLanguageList(constedLanguageList);
            });
    }, []);

    const generateLanguageCountObj = (alllanguageList) => {
        const notNullLanguageList = alllanguageList.filter(language => language != null);
        const uniqueLanguageList = [...new Set(notNullLanguageList)];

        return uniqueLanguageList.map(item => {
            return {
                language: item,
                count: alllanguageList.filter(language => language === item).length
            }
        });
    };

    return (
        <div id="skills">
            <div className="container">
                <div className="heading">
                    <h2>Skills</h2>
                </div>
                <div className="skills-container">
                </div>
            </div>
        </div>
    );
}
