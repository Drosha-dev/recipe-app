interface RecipeItemProps {
    children?: React.ReactNode;
    item: {
        id: string;
        title: string;
        publisher: string;
        image_url: string;
    };
}
    

export default function RecipeItem({item} : RecipeItemProps) {
    
  return (
    <div>RecipeItem</div>
  )
}