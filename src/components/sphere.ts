import {
	Color,
	Float32BufferAttribute,
	Mesh,
	MeshBasicMaterial,
	SphereGeometry,
	Vector3,
} from "three";

export const createSphere = () => {
	// Create a sphere
	const resolution = 64;
	const geometry = new SphereGeometry(1, resolution, resolution);
	// Apply noise to vertices
	const positionAttribute = geometry.attributes.position;
	const colors = [];
	const color = new Color();
	for (let i = 0; i < positionAttribute.count; i++) {
		const vertex = new Vector3().fromBufferAttribute(positionAttribute, i);
		const noise = 0.04; // Noise intensity for shape
		vertex.x += (Math.random() - 0.5) * noise;
		vertex.y += (Math.random() - 0.5) * noise;
		vertex.z += (Math.random() - 0.5) * noise;
		positionAttribute.setXYZ(i, vertex.x, vertex.y, vertex.z);

		// Assign a color to each vertex
		color.setRGB(
			0.5 + Math.random() * 0.5,
			0.5 + Math.random() * 0.5,
			0.5 + Math.random() * 0.5,
		);

		colors.push(color.r, color.g, color.b);
	}
	geometry.setAttribute("color", new Float32BufferAttribute(colors, 3));
	geometry.computeVertexNormals(); // Smooth out lighting

	// Enable vertex colors in the material
	const material = new MeshBasicMaterial({
		vertexColors: true,
	});
	const sphere = new Mesh(geometry, material);
	return sphere;
};
