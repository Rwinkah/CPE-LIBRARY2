"use client"

import { z } from "zod"
import { FormProvider, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { ComboboxForm } from "@/components/ui/combobox"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form"


import { Input } from "@/components/ui/input"

const signupSchema = z.object({
    email: z.string().email('invalid email'),
    password: z.string(),
    firstName: z.string(),
    lastName: z.string(),
    matNo: z.string(),
    level: z.number()
})

interface signupProp {
    step: number
}

export function SignupForm() {
    
    function onSubmit(values: z.infer<typeof signupSchema>) {

    }

    function onProceed(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        if (step === 1) {
            setStep(2)
        }

        else {
            setStep(1)
        }

        console.log(step)
    }
    
    const [step, setStep] = useState(1);
    const form = useForm<z.infer<typeof signupSchema>>({
        resolver: zodResolver(signupSchema),
        defaultValues: {
            email: "",
            password: '',
            firstName: '',
            lastName: '',
            matNo: '',
            level: 100
        }
    })

    if (step === 1) {
        return (
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-8"
                >
                    <h3>Step 1 of 3</h3>
                    <h1>Create an account</h1>
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel> Uniben email address</FormLabel>
                                <FormControl>
                                    <Input className="rounded-3xl" placeholder="student-lastname@eng.uniben.edu" {...field}/>
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Create a Password</FormLabel>
                                <FormControl>
                                    <Input className="rounded-3xl" placeholder="**********" type="password" {...field} />
                                </FormControl>
                            </FormItem>
                        )}

                    />
                    <Button className="rounded-3xl border w-[100%] bg-[#820B8A] text-white"type="submit" onClick={onProceed}>Submit</Button>

                </form>
            </Form>
                )
    } else if (step === 2) {
        return (
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-8"
                >
                    <h3>Step 2 of 3</h3>
                    <h1>Create an account</h1>
                    <div className="flex justify-between gap-4">
                        <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel> First name</FormLabel>
                                <FormControl>
                                    <Input className="rounded-3xl" placeholder="Osato" {...field}/>
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Last name</FormLabel>
                                <FormControl>
                                    <Input className="rounded-3xl" placeholder="**********"  {...field} />
                                </FormControl>
                            </FormItem>
                        )}

                    />
                    </div>
                    <FormField
                        control={form.control}
                        name="matNo"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Matric number</FormLabel>
                                <FormControl>
                                    <Input className="rounded-3xl" placeholder="**********"  {...field} />
                                </FormControl>
                            </FormItem>
                        )}

                    />
                    <FormField
                        control={form.control}
                        name="level"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Level</FormLabel>
                                <FormControl>
                                    {/* <Input className="rounded-3xl" placeholder="**********"  {...field} /> */}
                                    <ComboboxForm />
                                </FormControl>
                            </FormItem>
                        )}

                    />
                    <Button className="rounded-3xl border w-[100%] bg-[#820B8A] text-white" type="submit" onClick={onProceed}>Continue</Button>

                    

                </form>
            </Form>          
        )
    }
        
    }




