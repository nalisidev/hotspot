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

</script>

<template>
  <div class="h-screen w-screen">
    <Tabs default-value="packages" class="w-full md:w-[460px] md:mx-auto">
      <TabsList class="grid w-full grid-cols-2 rounded-sm">
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
                  {{ pkg.price }} KSH
                </h2>
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Dialog class="mx2">
                <DialogTrigger as-child>
                  <Button class="w-full">
                    Buy Now
                  </Button>
                </DialogTrigger>
                <DialogContent class="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Buy Package</DialogTitle>
                    <DialogDescription>
                      Buy the {{ pkg.duration }} package for {{ pkg.devices }} devices for {{ pkg.price }} KSH
                    </DialogDescription>
                  </DialogHeader>
                  <form>
                    <div class="grid gap-4 py-4">
                      <div>
                        <Label for="phone" class="flex flex-col gap-2">
                          Phone
                          <div class="flex w-full">
                            <div class="px-2 py-2 bg-accent text-muted-foreground border border-border rounded-s">+254</div>
                            <Input id="phone" type="phone" class="rounded-s-[0px]" />
                          </div>
                        </Label>
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
          <form>
            <CardContent class="space-y-2">
              <div class="space-y-1">
                <Label for="current">Voucher</Label>
                <Input id="current" type="text" class="uppercase" />
              </div>
            </CardContent>
            <CardFooter>
              <Button class="w-full">
                Connect
              </Button>
            </CardFooter>
          </form>
        </Card>
      </TabsContent>
    </Tabs>
  </div>
</template>

