import { getArtifactController } from '../controller/githubController';

test('Check github artifacts uploads are present', async () => {
    const data = await getArtifactController();
    console.log(data);
    expect(await data.artifacts[0].name).toBe('baseline-images');
});