import axios from 'axios';
import dotenv from 'dotenv';
import path from 'path';

const cwd = process.cwd();
console.log(path.join(cwd, '../.env'))
dotenv.config({path: path.join(cwd, '../.env')});
const apiKey = process.env.GIT_TOKEN

export async function getArtifactController() {
    console.log(process.env.HOME)
    console.log(apiKey)
    const headers = {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/vnd.github+json',
    };

    const axiosConfig = {
        headers: headers,
    };
 
    try {
        const response = await axios.get('https://api.github.com/repos/jquinterot/playwright_pom/actions/artifacts',
        axiosConfig);
        return response.data;
    } catch (error) {
        console.log(error)
    }
}