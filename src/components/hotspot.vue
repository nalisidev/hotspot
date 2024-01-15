<script setup lang="ts">
import { type HotspotProps, themes } from '@/types'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from '@/components/ui/tabs'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { ScrollArea } from '@/components/ui/scroll-area'
import { onMounted, onUpdated, ref } from 'vue'

const buyDisabled = ref(false)

const submitted = ref(false)
const processing = ref(false)
const success = ref(false)
const root = ref<HTMLElement>()

const props = defineProps<HotspotProps>()

const isImageSrc = (src: string) =>
  src.startsWith('http') || src.startsWith('data:image/svg+xml')

const retry = () => submitted.value = false

const handlePurchase = async (e: SubmitEvent) => {
  e.preventDefault()
  submitted.value = true
  buyDisabled.value = true

  // @ts-ignore
  const action = e.target.action
  processing.value = true

  setTimeout(() => {
    fetch('https://google.com', {  
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      }
    }).then((value) => {
      processing.value = false
      buyDisabled.value = false
      //@ts-ignore
      if(value.status === 'success') {
        success.value = true
      } else {
        success.value = false
      }
      console.log(value)
    }).catch((e) => {
      processing.value = false
      buyDisabled.value = false
      console.log(e)
    })
  }, 4000)
}

onUpdated(() => {
  console.log(props)
  if(props.dark) {
    root.value!.classList.add('dark')
  } else {
    root.value!.classList.remove('dark')
  }
  if(props.theme) {
    console.log(props.theme)
    root.value!.classList.remove('theme-blue')
    root.value!.classList.add(themes[props.theme])
  } else {

  }
})

onMounted(() => {
  root.value = document.documentElement
  root.value.classList.add('theme-blue')
})
</script>
 
<template>
  <div class="h-100dvh h-screen w-full bg-background">
    <Tabs default-value="packages" class="w-full md:w-[460px] md:mx-auto  of-hidden grid grid-rows-[auto_1fr_auto] min-h-[100vh]">
      <!-- header -->
      <div class="w-full">
        <div class="w-full rounded-0 bg-muted p-4 flex items-center justify-center">
          <img v-if="!isImageSrc(props.logo || '')" src="../assets/logo.png" style="height: 80px;"/>
          <img :src="props.logo" style="height: 50px; "/>
        </div>
        <TabsList class="grid w-full grid-cols-2 sm:rounded-b-sm rounded-[0px] z-1">
          <TabsTrigger value="packages">
            Packages
          </TabsTrigger>
          <TabsTrigger value="voucher">
            Voucher
          </TabsTrigger>
        </TabsList>
      </div>
      <!-- content -->
      <div class="w-full">
        <TabsContent value="packages">
          <ScrollArea class="w-full md:w-[460px]" style="height: calc(100vh - 12.5rem);">
            <div v-for="pkg, idx in props.packages" :key="idx" class="my-2 mx-2">
              <Card>
                <CardHeader>
                  <CardTitle>{{ pkg.name }}</CardTitle>
                  <CardDescription class="flex gap-2 justify-between items-center">
                    <p>{{ pkg.duration }} package • For {{ pkg.devices }} device(s)</p>
                    <h2 font-bold text-lg>
                      {{ pkg.amount }} KSH
                    </h2>
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <Dialog class="mx2" >
                    <DialogTrigger as-child>
                      <Button class="w-full">
                        Buy Now
                      </Button>
                    </DialogTrigger>
                    <DialogContent
                    v-if="!submitted"
                    class="sm:max-w-[425px] " 
                    @interact-outside.prevent 
                    @focus-outside.prevent
                    @pointer-down-outside.prevent>
                      <DialogHeader>
                        <DialogTitle>Buy Package</DialogTitle>
                        <DialogDescription>
                          Buy the {{ pkg.duration }} package for {{ pkg.devices }} devices for {{ pkg.amount }} KSH
                        </DialogDescription>
                      </DialogHeader>
                      <form :onsubmit="handlePurchase">
                        <div class="grid gap-4 py-4">
                          <div>
                            <Label for="phone" class="flex flex-col gap-2">
                              Phone
                              <div class="flex w-full">
                                <div class="px-2 py-2 bg-accent text-muted-foreground border border-border rounded-s">+254</div>
                                <Input id="phone" type="number" name="phone" class="rounded-s-[0px]" />
                              </div>
                            </Label>
                            <input type="hidden" name="json" :value="true"/>
                            <input type="hidden" name="package" :value="pkg.id"/>
                            <input type="hidden" name="obtainable" value="ACCESS"/>
                            <input type="hidden" name="payment_method" value="Mpesa"/>
                            <input type="hidden" name="_token" :value="props.csrfToken" />
                          </div>
                        </div>
                        <DialogFooter>
                          <Button type='submit' class="w-full" :disabled="buyDisabled">
                            Pay
                          </Button>
                        </DialogFooter>
                      </form>
                    </DialogContent>
                    <DialogContent v-else
                    class="sm:max-w-[425px]" 
                    @interact-outside.prevent 
                    @focus-outside.prevent
                    @pointer-down-outside.prevent>
                    <div v-if="processing">
                      <DialogHeader >
                        <DialogTitle class="text-orange flex gap-3 items-center justify-center sm:justify-start">
                          <div class="i-eos-icons-loading text-3xl"/>
                          Processing
                        </DialogTitle>
                        <DialogDescription>
                          We are sending you a push
                        </DialogDescription>
                      </DialogHeader>
                      <div class="font-semibold py-2">
                        Please wait while we process your request
                      </div>
                    </div>
                    <div v-else>
                      <div v-if="success">
                        <DialogHeader >
                          <DialogTitle class="text-green flex gap-3 items-center justify-center sm:justify-start">
                            <div class="i-clarity-success-standard-line text-3xl"/>
                            Success
                          </DialogTitle>
                          <DialogDescription>
                            Successfully connected
                          </DialogDescription>
                        </DialogHeader>
                        <div class="font-semibold py-2">
                          Package {{ pkg.name }} purchased successfully
                        </div>
                      </div>
                      <div v-else>
                        <DialogHeader >
                          <DialogTitle class="text-red flex gap-3 items-center justify-center sm:justify-start">
                            <div class="i-material-symbols-error-outline-rounded text-3xl"/>
                            Error
                          </DialogTitle>
                          <DialogDescription>
                            An error occured
                          </DialogDescription>
                        </DialogHeader>
                        <div class="font-semibold py-2">
                          Something happened while processing the request
                        </div>
                        <DialogFooter>
                          <Button variant="destructive" class="w-full" @click="retry">
                            Try Again
                          </Button>
                        </DialogFooter>
                      </div>
                    </div>
                    </DialogContent>
                  </Dialog>
                </CardFooter>
              </Card>
            </div>
          </ScrollArea>
        </TabsContent>
        <TabsContent value="voucher">
          <Card class="mx-2">
            <CardHeader>
              <CardTitle>Enter Voucher</CardTitle>
              <CardDescription>
                Connect back to your internet using the voucher.
              </CardDescription>
            </CardHeader>
            <form :action="props.voucherUrl" method="POST">
              <CardContent class="space-y-2">
                  <Label for="voucher" class="space-y-1">
                    Voucher
                    <Input id="current" name="code" type="text" class="uppercase" />
                  </Label>
                  <input type="hidden" name="_token" :value="props.csrfToken" />
              </CardContent>
              <CardFooter>
                <Button type="submit" class="w-full">
                  Connect
                </Button>
              </CardFooter>
            </form>
          </Card>
        </TabsContent>
      </div>
      <!-- footer -->
      <div class="w-full md:w-[460px] md:mx-auto rounded-0 bg-muted p-4 flex items-center justify-center z-1 gap-2">
        <a href="https://wezeshanet.com/terms" target="_blank" rel="noopener">Terms of Service</a> and <a href="https://wezeshanet.com/privacy-policy" target="_blank" rel="noopener">Privacy Policy</a>
      </div>
    </Tabs>
  </div>
</template>

<style>
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}

input:focus::placeholder {
  color: transparent;
}

a {
  text-decoration: underline;
  color: rgb(43, 116, 226);
}

a:hover {
  text-decoration: underline;
  text-decoration-style: dotted;
}
</style>


