import { getArtifactController } from '../controller/testController';

test('get github artifacts', async () => {
    const data = await getArtifactController();
    console.log(data);
    expect(await data.artifacts[0].name).toBe('baseline-images');
});