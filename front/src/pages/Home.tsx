import { AppointmentBooking } from "../components/home/AppointmentButton"
import { Banner } from "../components/home/Banner"
import { Chatbot } from "../components/home/Chatbot"
import { PsychEducation } from "../components/home/Psych"
import { OnlineCommunity } from "../components/home/Community"

export const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-2 gap-10">
      <Banner />
      <AppointmentBooking />
      <p className="text-center text-gray-700 text-sm sm:text-base px-3">
        Don't wanna talk? <span className="font-semibold">Feel free to Chat with BOB Bot</span>.
      </p>
      <Chatbot />
      <PsychEducation />
      <OnlineCommunity />
    </div>
  )
}
