import { useRouter } from "next/navigation";

export function useNavigation() {
    const router = useRouter();
    
    const navigateTo = (path: string) => {
        router.push(path);
    };

    const navigateBack = () => {
        router.back();
    }
    
    return { navigateTo, navigateBack };
}