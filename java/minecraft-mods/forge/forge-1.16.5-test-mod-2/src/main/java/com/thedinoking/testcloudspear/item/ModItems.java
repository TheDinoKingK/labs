package com.thedinoking.testcloudspear.item;

import com.thedinoking.testcloudspear.TestCloudSpear;
import com.thedinoking.testcloudspear.item.custom.Spear;
import net.minecraft.item.Item;
import net.minecraftforge.eventbus.api.IEventBus;
import net.minecraftforge.fml.RegistryObject;
import net.minecraftforge.registries.DeferredRegister;
import net.minecraftforge.registries.ForgeRegistries;

public class ModItems {

    public static final DeferredRegister<Item> ITEMS =
            DeferredRegister.create(ForgeRegistries.ITEMS, TestCloudSpear.MOD_ID);

    public static final RegistryObject<Item> ROCK = ITEMS.register("rock",
            () -> new Item(new Item.Properties().group(ModItemGroup.TESTCLOUD_GROUP)));

    public static final RegistryObject<Item> RAW_SILVER = ITEMS.register("raw_silver",
            () -> new Item(new Item.Properties().group(ModItemGroup.TESTCLOUD_GROUP)));

    public static final RegistryObject<Item> SILVER_INGOT = ITEMS.register("silver_ingot",
            () -> new Item(new Item.Properties().group(ModItemGroup.TESTCLOUD_GROUP)));

    public static final RegistryObject<Item> SPEAR = ITEMS.register("spear",
            () -> new Spear(new Item.Properties().group(ModItemGroup.TESTCLOUD_GROUP).maxDamage(175)));

    public static void register(IEventBus eventBus) {
        ITEMS.register(eventBus);
    }
}
