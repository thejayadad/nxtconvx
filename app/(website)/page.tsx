import ActionBar from "@/components/action-bar/action-bar";
import Box from "@/components/Box";


export default function Home() {

  // const createPost = useMutation(api.post.createPost)
  // const posts = useQuery(api.post.getPost)
  return (
    <div>
        <Box>
          <ActionBar
          title="Welcome to the VentBoard"
          description="The place to share and vent about what's on your mind."
          />
        </Box>
    </div>
  );
}
