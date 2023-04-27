import { Transition } from '@headlessui/react'

function FullScreenSpinner({ isOpen }: { isOpen: boolean }) {
  return (
    <Transition
      show={isOpen}
      enter="transition-opacity duration-600"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-600"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className="fixed inset-0 z-auto flex h-full w-full items-center justify-center bg-white">
        <Spinner />
      </div>
    </Transition>
  )
}

const Spinner = () => (
  <div className="h-32 w-32 animate-spin rounded-full border-t-2 border-b-2 border-primary"></div>
)

export default FullScreenSpinner
