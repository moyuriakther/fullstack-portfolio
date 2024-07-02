import { Container, Row } from "react-bootstrap";
import { useGetAllBLogQuery } from "../services/api/apiSlice";
import BlogCard from "../components/BlogCard";


const BlogPage = () => {
    const {data: blogs} = useGetAllBLogQuery()
    return (
        <Container style={{ padding: '20px' }} id="blog">
        <h2 className="text-success">BLOGS</h2>
        <Row>
          {blogs?.data?.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </Row>
      </Container>
    )
};

export default BlogPage;