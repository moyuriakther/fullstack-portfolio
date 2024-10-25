import { Container, Row } from "react-bootstrap";
import { useGetAllBLogQuery } from "../services/api/apiSlice";
import BlogCard from "../components/BlogCard";
// import { blogsinfos } from "../data/blog";


const BlogPage = () => {
    const {data: blogs} = useGetAllBLogQuery()
    return (
        <Container style={{ padding: '30px' }} id="blog">
        <h2 className="purple project-heading">BLOGS</h2>
        <Row>
          {blogs?.data?.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </Row>
        {/* <Row>
          {blogsinfos?.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </Row> */}
      </Container>
    )
};

export default BlogPage;