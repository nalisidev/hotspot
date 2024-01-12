<script setup lang="ts">
import type { HotspotProps } from '@/types'
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

const props = defineProps<HotspotProps>()

const isImageSrc = (src: string) =>
  src.startsWith('http') || src.startsWith('data:image/svg+xml')

</script>

<template>
  <div class="h-screen w-full bg-background">
    <div class="w-full md:w-[460px] md:mx-auto rounded-0 bg-muted p-4 flex items-center justify-center">
      <img v-if="!isImageSrc(props.logo || '')" src="../assets/logo.png" style="height: 80px; "/>
      <img :src="props.logo" style="height: 50px; "/>
    </div>
    <Tabs default-value="packages" class="w-full md:w-[460px] md:mx-auto">
      <TabsList class="grid w-full grid-cols-2 sm:rounded-b-sm rounded-[0px] ">
        <TabsTrigger value="packages">
          Packages
        </TabsTrigger>
        <TabsTrigger value="voucher">
          Voucher
        </TabsTrigger>
      </TabsList>
      <TabsContent value="packages">
        <div v-for="pkg, idx in props.packages" :key="idx" class="my-2 mx-2">
          <Card>
            <CardHeader>
              <CardDescription class="flex gap-2 justify-between items-center">
                <p>{{ pkg.duration }} package • For {{ pkg.devices }} device(s)</p>
                <h2 font-bold text-lg>
                  {{ pkg.amount }} KSH
                </h2>
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Dialog class="mx2" :modal="true">
                <DialogTrigger as-child>
                  <Button class="w-full">
                    Buy Now
                  </Button>
                </DialogTrigger>
                <DialogContent 
                class="sm:max-w-[425px]" 
                @interact-outside.prevent 
                @focus-outside.prevent
                @pointer-down-outside.prevent>
                  <DialogHeader>
                    <DialogTitle>Buy Package</DialogTitle>
                    <DialogDescription>
                      Buy the {{ pkg.duration }} package for {{ pkg.devices }} devices for {{ pkg.amount }} KSH
                    </DialogDescription>
                  </DialogHeader>
                  <form :action="props.packagePurchaseUrl" method="POST">
                    <div class="grid gap-4 py-4">
                      <div>
                        <Label for="phone" class="flex flex-col gap-2">
                          Phone
                          <div class="flex w-full">
                            <div class="px-2 py-2 bg-accent text-muted-foreground border border-border rounded-s">+254</div>
                            <Input id="phone" type="number" name="phone" class="rounded-s-[0px]" />
                          </div>
                        </Label>
                        <input type="hidden" name="_token" :value="props.csrfToken" />
                      </div>
                    </div>
                    <DialogFooter>
                      <Button type="submit" class="w-full">
                        Pay
                      </Button>
                    </DialogFooter>
                  </form>
                </DialogContent>
              </Dialog>
            </CardFooter>
          </Card>
        </div>
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
                  <Input id="current" name="voucher" type="text" class="uppercase" />
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
</style>


