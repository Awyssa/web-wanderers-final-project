// In this file we are creating the seed data that will then be seeded to the database.
// (Basically just fake data we will create in the database to get it up and running)

export const rotaData: {
  rotaName: string
	startDate: string
	endDate: string
	openSlots: number
	filledSlots: number
  jobs: any[]
	}[] = [
		{
			rotaName: "Akwaaba Sunday Rota",
			startDate: "03/01/2021",
			endDate: "28/08/2022",
			openSlots: 122,
			filledSlots: 0,
			jobs: [
				{
					jobTitle: "Saturday Driver",
					date: "24/07/2022",
					startTime: "12:00",
					endTime: "15:00",
					slots: 3,
					filledSlots: 0
				},
				{
					jobTitle: "Kitchen Volunteer",
					date: "14/08/2022",
					startTime: "10:00",
					endTime: "15:00",
					slots: 5,
					filledSlots: 0
				}
			],
		},
		{
			rotaName: "Kids' Team Sunday Rota",
			startDate: "31/10/2021",
			endDate: "11/12/2022",
			openSlots: 134,
			filledSlots: 0,
			jobs: [
				{
					jobTitle: "Indoor Supervisor",
					date: "24/07/2022",
					startTime: "13:00",
					endTime: "17:45",
					slots: 1,
					filledSlots: 1
				},
				{
					jobTitle: "Kids' Volunteer",
					date: "25/09/2022",
					startTime: "13:45 ",
					endTime: " 17:30",
					slots: 13,
					filledSlots: 0
				}
			],
		}
	];