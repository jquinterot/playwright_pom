import axios from 'axios';
import dotenv from 'dotenv';
import path from 'path';

const cwd = process.cwd();
dotenv.config({path: path.join(cwd, '../.env')});
const apiKey = process.env.GIT_TOKEN

export async function getArtifactController() {
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