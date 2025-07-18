export default async function ProductDetail({ params }) {
	params = await params;
	return <h1>Product ID: {params.id}</h1>;
}
