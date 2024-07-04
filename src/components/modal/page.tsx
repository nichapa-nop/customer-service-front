import Link from "next/link";
// import { Modal } from "@/component/modal/modal";

type Props = {
  searchParams: Record<string, string> | null | undefined;
};

export default function Page({ searchParams }: Props) {
  const showModal = searchParams?.modal;

  return (
    <Link href="/?modal=true">OPEN MODAL</Link>
    // {showModal && <Modal />}
  );
}
